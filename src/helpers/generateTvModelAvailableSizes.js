function generateTvModelAvailableSizes({ availableSizes }) {
  return availableSizes
    .map((size) => `${size}inch (${Math.round(2.54 * size)} cm)`)
    .join(" | ");
}

export default generateTvModelAvailableSizes;
