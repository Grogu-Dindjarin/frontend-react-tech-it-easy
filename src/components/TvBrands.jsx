import { inventory } from "../constants/inventory.js";
import "./TvBrands.css";
import generateTvModel from "../helpers/generateTvModel.js";
import generateTvModelPrice from "../helpers/generateTvModelPrice.js";
import generateTvModelAvailableSizes from "../helpers/generateTvModelAvailableSizes.js";
import getTvOptionsWithStatus from "../helpers/getTvOptionsWithStatus.js";
import checkIfTvIsSoldOut from "../helpers/checkIfTvIsSoldOut.js";

function TvBrands() {
  return (
    <ul>
      {inventory.map((tv) => {
        return (
          <li key={tv.type}>
            <article className="tv-article">
              <img
                className="tv-image"
                src={
                  checkIfTvIsSoldOut(tv)
                    ? `src/assets/out-of-stock.png`
                    : tv.sourceImg
                }
                alt="tv image"
              />
              <div className="tv-specs">
                <h3>{generateTvModel(tv)}</h3>
                <span>{generateTvModelPrice(tv)}</span>
                <p>{generateTvModelAvailableSizes(tv)}</p>
                <div className="icon-container">
                  {getTvOptionsWithStatus(tv).map((option, index) => (
                    <div key={index} className="option">
                      <img
                        className="icon"
                        src={
                          option.applicable
                            ? "src/assets/check.png"
                            : "src/assets/minus.png"
                        }
                        alt={option.name}
                      />
                      <span>{option.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

export default TvBrands;
