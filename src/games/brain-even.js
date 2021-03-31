import { getRandomNumber } from '../math.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const setEvenRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);
  return { question, correctAnswer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export { description, setEvenRound };
