import ShopItem from "./components/ShopItem";
import { useState, useEffect } from "react";
import "./App.css";
import { items } from "./Items";

function App() {
  const [uuid, setUuid] = useState("");
  const [playerInfo, setPlayerInfo] = useState("Loading player information...");
  const [balance, setBalance] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Lấy trạng thái từ localStorage, mặc định là light mode
    return localStorage.getItem("theme") === "dark";
  });
  const itemsPerPage = 6;
  const urlRequest = "http://cnttv.ddns.net:19132";

  // Cập nhật class dark và lưu vào localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Hàm chuyển đổi chế độ
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
      setBalance(`Balance: ${data.coins} coins`);
    } catch (error) {
      setPlayerInfo("Error connecting to server. Error: " + error);
    }
  };

  const buyItem = async (item, amount) => {
    if (!uuid || !amount || amount < 1) {
      alert("Invalid amount.");
      return;
    }
    try {
      const response = await fetch(
        urlRequest + `/buy?uuid=${uuid}&item=${item}&amount=${amount}`
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

  // Lọc vật phẩm theo danh mục
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  // Tính toán các vật phẩm hiển thị trên trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Lấy danh sách danh mục duy nhất
  const categories = ["All", ...new Set(items.map((item) => item.category))];

  return (
    <div className="min-h-screen font-sans bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto p-4 flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white dark:bg-gray-800 p-4 rounded shadow-md mr-4">
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
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Nội dung chính */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              RLCraft VShop
            </h1>
            {/* Nút chuyển đổi chế độ tối/sáng */}
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
          <div
            id="playerInfo"
            className="mb-4 text-gray-900 dark:text-gray-200"
          >
            <p>{playerInfo}</p>
          </div>
          <div
            id="balance"
            className="mb-4 font-semibold text-gray-900 dark:text-gray-200"
          >
            {balance}
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
            Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentItems.map((item) => (
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
              />
            ))}
          </div>
          {/* Phân trang */}
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
