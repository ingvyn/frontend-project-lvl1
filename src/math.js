const getRandomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
export { getRandomNumber, gcd };
