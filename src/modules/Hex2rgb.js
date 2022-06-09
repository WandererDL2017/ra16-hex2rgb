function Hex2rgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return null;
  }
  result.shift();
  return result
    ? `rgb(${result.map(i => parseInt(i, 16)).join(", ")})`
    : null;
}

export default Hex2rgb;