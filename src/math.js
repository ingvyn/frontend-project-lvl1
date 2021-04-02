const minEdgeOfNumber = 1;
const maxEdgeOfNumber = 99;
const getRandomNumber = (min = minEdgeOfNumber,
  max = maxEdgeOfNumber) => Math.floor(Math.random() * (max - min + 1)) + min;
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
export { getRandomNumber, gcd };
