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
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options can be used to round to whole numbers.
    trailingZeroDisplay: "stripIfInteger", // This is probably what most people
    // want. It will only stop printing
    // the fraction when the input
    // amount is a round number (int)
    // already. If that's not what you
    // need, have a look at the options
    // below.
    //minimumFractionDigits: 0, // This suffices for whole numbers, but will
    // print 2500.10 as $2,500.1
    //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
  });
  return (
    <div className="border p-4 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <h3 className="font-bold">{name}</h3>
      {imageSrc && (
        <img src={imageSrc} alt={name} className="w-16 h-16 mb-2 mx-auto" />
      )}
      <p class="text-green-500">
        Buy Price: {formatter.format(buyPrice)} pers 
      </p>
      <p class="text-red-500">
        Sell Price: {formatter.format(sellPrice)} pers
      </p>
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
