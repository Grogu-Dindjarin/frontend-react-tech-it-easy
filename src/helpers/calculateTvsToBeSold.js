import calculateTvsByTypeSold from './calculateTvsByTypeSold.js';
import calculatePurchasedTvs from './calculatePurchasedTvs.js'

function calculateTvsToBeSold(inventory) {
    return calculatePurchasedTvs(inventory) - calculateTvsByTypeSold(inventory);
}

export default calculateTvsToBeSold;