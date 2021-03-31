import { getRandomNumber, gcd } from '../math.js';

const setGcdRound = () => {
  const operandOne = getRandomNumber();
  const operandTwo = getRandomNumber();
  const question = `${operandOne} ${operandTwo}`;
  let correctAnswer = (operandOne > operandTwo) ? gcd(operandOne, operandTwo)
    : gcd(operandTwo, operandOne);
  correctAnswer = String(correctAnswer);
  return { question, correctAnswer };
};
const description = 'Find the greatest common divisor of given numbers.';
export { description, setGcdRound };
