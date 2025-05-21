import ShopItem from "./components/ShopItem";
import { useState, useEffect } from "react";
import "./App.css";
import {
  ARMOR_CATEGORY,
  items,
  TOOLS_CATEGORY,
  WEAPONS_CATEGORY,
} from "./Items";
import { equivalent, formatter_number } from "./utils/Number";

function App() {
  const [uuid, setUuid] = useState("");
  const [playerInfo, setPlayerInfo] = useState("Loading player information...");
  const [balance, setBalance] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const itemsPerPage = 6;
  const urlRequest = "http://cnttv.ddns.net:19132";

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const uuidParam = urlParams.get("uuid");
    setUuid(uuidParam);

    if (!uuidParam) {
      setPlayerInfo("Error: No UUID provided. Use /shop link in-game.");
      return;
    }

    checkBalance(uuidParam);
  }, []);

  const checkBalance = async (uuid) => {
    try {
      const response = await fetch(urlRequest + `/balance?uuid=${uuid}`);
      const data = await response.json();
      setPlayerInfo(`Player UUID: ${data.uuid}`);
      setBalance(`Balance: ${formatter_number(data.coins)} coins`);
    } catch (error) {
      setPlayerInfo("Error connecting to server. Error: " + error);
    }
  };

  const buyItem = async (item, amount, category, fullStack) => {
    if (!uuid || !amount || amount < 1) {
      alert("Invalid amount.");
      return;
    }
    let isCategoryTools =
      category == TOOLS_CATEGORY ||
      category == ARMOR_CATEGORY ||
      category == WEAPONS_CATEGORY;
    if (isCategoryTools) {
      fullStack = 1;
    }
    if (fullStack === undefined) {
      fullStack = 64;
    }
    let listEquivalent = equivalent(amount, fullStack);
    console.log(listEquivalent);
    for (let i = 0; i < listEquivalent.length; i++) {
      let value = listEquivalent[i];
      try {
        const response = await fetch(
          urlRequest + `/buy?uuid=${uuid}&item=${item}&amount=${value}`
        );
        const data = await response.json();
        if (data.status === "success") {
          alert("Purchase successful!");
          checkBalance(uuid);
        } else {
          alert("Not enough coins.");
        }
      } catch (error) {
        alert("Error connecting to server. Error: " + error);
      }
    }
  };

  const sellItem = async (item, amount) => {
    if (!uuid || !amount || amount < 1) {
      alert("Invalid amount.");
      return;
    }
    try {
      const response = await fetch(
        urlRequest + `/sell?uuid=${uuid}&item=${item}&amount=${amount}`
      );
      const data = await response.json();
      if (data.status === "success") {
        alert("Sale successful!");
        checkBalance(uuid);
      } else {
        alert("Not enough items in inventory.");
      }
    } catch (error) {
      alert("Error connecting to server. Error: " + error);
    }
  };

  // Original item filtering by category
  const filteredItemsByCategory =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  // Apply search filter on top of category filter
  const filteredItems = filteredItemsByCategory.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  return (
    <div className="min-h-screen font-sans bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto p-4 flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-white dark:bg-gray-800 p-4 rounded shadow-md mr-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Categories
          </h2>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left p-2 rounded ${
                    selectedCategory === category
                      ? isDarkMode
                        ? "bg-blue-500 text-white"
                        : "bg-blue-200"
                      : isDarkMode
                      ? "bg-gray-200 dark:bg-gray-700 dark:text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://static.wikia.nocookie.net/shivaxis-rlcraft/images/e/e6/Site-logo.png"
              className="w-120 h-15 mb-2 mx-auto"
            />
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded flex items-center gap-2"
            >
              {isDarkMode ? (
                <>
                  <span>☀️</span> Light Mode
                </>
              ) : (
                <>
                  <span>🌙</span> Dark Mode
                </>
              )}
            </button>
          </div>
          <div className="marquee-container mb-4">
            <div className="marquee-text rainbow-text">
              Chào mừng đến với RLCraft VShop! Chào mừng bạn đến với thế giới
              của RLCraft!{" "}
            </div>
          </div>
          <div
            id="playerInfo"
            className="mb-4 text-gray-900 dark:text-green-200"
          >
            <p>{playerInfo}</p>
          </div>
          <div
            id="balance"
            className="mb-4 font-semibold text-gray-900 dark:text-gray-200"
          >
            {balance}
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-green-500">
            Shop
          </h2>
          {/* Search bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="w-full p-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredItems.length === 0 ? (
              <p className="text-gray-900 dark:text-white">No items found.</p>
            ) : (
              currentItems.map((item) => (
                <ShopItem
                  key={item.itemId}
                  name={item.name}
                  itemId={item.itemId}
                  buyPrice={item.buyPrice}
                  sellPrice={item.sellPrice}
                  buyItem={buyItem}
                  sellItem={sellItem}
                  inputId={item.inputId}
                  imageSrc={item.imageSrc}
                  category={item.category}
                  fullStack={item.fullStack}
                />
              ))
            )}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700 dark:text-white"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
