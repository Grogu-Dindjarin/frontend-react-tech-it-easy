function calculateTvsByTypeSold(inventory) {
    let soldTvs = 0;
// desctructed tv object
    inventory.map(({sold}) => {
           soldTvs += sold;
    })
    return soldTvs;
}

export default calculateTvsByTypeSold;