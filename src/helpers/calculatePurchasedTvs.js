function calculatePurchasedTvs(inventory) {
    let stockedTvs = 0;
// desctructed originalStock object
    inventory.map(({originalStock}) => {
        stockedTvs += originalStock;
    })
    return stockedTvs;
}

export default calculatePurchasedTvs;