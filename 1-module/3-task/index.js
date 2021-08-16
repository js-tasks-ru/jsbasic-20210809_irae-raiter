function ucFirst(str) {
  if (!str.trim()) return str;
  return (str[0].toUpperCase() + str.slice(1));
}
