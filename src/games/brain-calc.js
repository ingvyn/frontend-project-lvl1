import { getRandomNumber } from '../math.js';

const maxEdgeOfMinMultiplier = 10;
const setCalcRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const operandOne = getRandomNumber();
  let operandTwo;
  if (operation === '-') {
    operandTwo = getRandomNumber(1, operandOne);
  } else if (operandOne > maxEdgeOfMinMultiplier && operation === '*') {
    operandTwo = getRandomNumber(1, maxEdgeOfMinMultiplier);
  } else {
    operandTwo = getRandomNumber();
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
