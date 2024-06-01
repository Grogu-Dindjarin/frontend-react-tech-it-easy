import "./SortButtonGroup.css";
import { inventory } from "../constants/inventory.js";

const SortingButtons = () => {
  const sortMostSoldFirst = () => {
    const sortedInventory = [...inventory].sort((a, b) => b.sold - a.sold);
    console.log(sortedInventory);
  };

  const sortCheapiestFirst = () => {
    const sortedInventory = [...inventory].sort((a, b) => a.price - b.price);
    console.log(sortedInventory);
  };

  const sortHighestRefreshRateFirst = () => {
    const sortedInventory = [...inventory].sort(
      (a, b) => b.refreshRate - a.refreshRate,
    );
    console.log(sortedInventory);
  };

  const sortBiggestScreenSizeFirst = () => {
    const sortedInventory = [...inventory].sort((a, b) => {
      // Find the maximum size in each availableSizes array
      const maxSizeA = Math.max(...a.availableSizes);
      const maxSizeB = Math.max(...b.availableSizes);

      // Compare the maximum sizes to determine the order
      return maxSizeB - maxSizeA;
    });
    console.log(sortedInventory);
  };

  return (
    <div className="sort-btn-grp">
      <button onClick={sortMostSoldFirst}>Meest verkocht eerst</button>
      <button onClick={sortCheapiestFirst}>Goedkoopste eerst</button>
      <button onClick={sortHighestRefreshRateFirst}>
        Meest geschikt voor sport eerst
      </button>
      <button onClick={sortBiggestScreenSizeFirst}>
        Grootste schermgroottes eerst
      </button>
    </div>
  );
};

export default SortingButtons;
