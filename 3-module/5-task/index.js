function getMinMax(str) {
  const numbers = str.split(' ').filter(item => {
    if (isFinite(item)) return item;
  });
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}
