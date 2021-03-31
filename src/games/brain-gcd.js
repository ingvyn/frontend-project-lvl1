import { getRandomNumber, gcd } from '../math.js';

const setGcdRound = () => {
  const operands = [];
  operands.push(getRandomNumber());
  operands.push(getRandomNumber());
  const question = `${operands[0]} ${operands[1]}`;
  operands.sort((a, b) => b - a);
  const correctAnswer = String(gcd(...operands));
  return { question, correctAnswer };
};
const description = 'Find the greatest common divisor of given numbers.';
export { description, setGcdRound };
