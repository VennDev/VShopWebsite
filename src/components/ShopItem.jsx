import { formatter_number } from "../utils/Number";

function ShopItem({
  name,
  itemId,
  buyPrice,
  sellPrice,
  buyItem,
  sellItem,
  inputId,
  imageSrc,
}) {
  return (
    <div className="border p-4 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <h3 className="font-bold">{name}</h3>
      {imageSrc && (
        <img src={imageSrc} alt={name} className="w-16 h-16 mb-2 mx-auto" />
      )}
      <p class="text-green-500">Buy Price: {formatter_number(buyPrice)} pers</p>
      <p class="text-red-500">Sell Price: {formatter_number(sellPrice)} pers</p>
      <input
        id={inputId}
        type="number"
        min="1"
        className="border p-2 w-full mb-2 bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      <button
        onClick={() => {
          const amount = document.getElementById(inputId).value;
          buyItem(itemId, amount);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Buy
      </button>
      <button
        onClick={() => {
          const amount = document.getElementById(inputId).value;
          sellItem(itemId, amount);
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sell
      </button>
    </div>
  );
}

export default ShopItem;
