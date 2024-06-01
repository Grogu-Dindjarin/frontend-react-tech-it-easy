function getTvOptionsWithStatus(tv) {
  return tv.options.map((option) => ({
    name: option.name,
    applicable: option.applicable,
  }));
}

export default getTvOptionsWithStatus;
