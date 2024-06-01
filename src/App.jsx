import "./App.css";
import calculateTvsByTypeSold from "./helpers/calculateTvsByTypeSold.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateTvsToBeSold from "./helpers/calculateTvsToBeSold.js";
import generateTvModel from "./helpers/generateTvModel.js";
import generateTvModelAvailableSizes from "./helpers/generateTvModelAvailableSizes.js";
import generateTvModelPrice from "./helpers/generateTvModelPrice.js";

import SortButtonGroup from "./components/SortButtonGroup.jsx";
import TvBrands from "./components/TvBrands.jsx";

import { inventory, bestSellingTv } from "./constants/inventory.js";

function App() {
  console.log("opdracht 1a: ", calculateTvsByTypeSold(inventory));
  console.log(generateTvModel(bestSellingTv));
  console.log(generateTvModelAvailableSizes(bestSellingTv));
  console.log(generateTvModelPrice(bestSellingTv));
  return (
    <>
      <main className="page-container">
        <h1>Tech it easy dashboard</h1>
        <section>
          <h2>Verkoopoverzicht</h2>
          <div className="product-overview">
            <article className="product-item sold-products">
              <h3>Aantal verkochte producten</h3>
              <p>{calculateTvsByTypeSold(inventory)}</p>
            </article>
            <article className="product-item stocked-products">
              <h3>Aantal ingekochte producten</h3>
              <p>{calculatePurchasedTvs(inventory)}</p>
            </article>
            <article className="product-item to-be-sold-products">
              <h3>Aantal te verkopen producten</h3>
              <p>{calculateTvsToBeSold(inventory)}</p>
            </article>
          </div>
        </section>
        <section>
          <h2>Beste verkochte tv</h2>
          <article className="product-best-seller">
            <img
              className="product-best-seller-image"
              src={bestSellingTv.sourceImg}
              alt="best selling tv image"
            />
            <div className="product-best-seller-specs">
              <h3>{generateTvModel(bestSellingTv)}</h3>
              <span>{generateTvModelPrice(bestSellingTv)}</span>
              <p>{generateTvModelAvailableSizes(bestSellingTv)}</p>
              <div className="icon-container">
                <img className="icon" src="src/assets/check.png" alt="check" />
                <span>wifi</span>
                <img className="icon" src="src/assets/minus.png" alt="minus" />
                <span>speech</span>
                <img className="icon" src="src/assets/check.png" alt="check" />
                <span>hdr</span>
                <img className="icon" src="src/assets/check.png" alt="check" />
                <span>bluetooth</span>
                <img className="icon" src="src/assets/minus.png" alt="minus" />
                <span>ambilight</span>
              </div>
            </div>
          </article>
        </section>
        <SortButtonGroup />
        <h2>Alle tvs</h2>
        <TvBrands />
      </main>
    </>
  );
}

export default App;
