import { getRandomNumber } from '../math.js';

const setCalcRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, 2)];
  const operandOne = getRandomNumber(1, 99);
  let operandTwo;
  if (operation === '-') {
    operandTwo = getRandomNumber(1, operandOne);
  } else if (operandOne > 10 && operation === '*') {
    operandTwo = getRandomNumber(1, 10);
  } else {
    operandTwo = getRandomNumber(1, 99);
  }
  const question = `${operandOne} ${operation} ${operandTwo}`;
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = operandOne + operandTwo;
      break;
    case '-':
      correctAnswer = operandOne - operandTwo;
      break;
    case '*':
      correctAnswer = operandOne * operandTwo;
      break;
    default:
  }
  correctAnswer = String(correctAnswer);
  return { question, correctAnswer };
};
const description = 'What is the result of the expression?';
export { description, setCalcRound };
