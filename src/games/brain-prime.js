import { getRandomNumber } from '../math.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  for (let part = 2; part <= number / 2; part += 1) {
    if (number % part === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const setPrimeRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question);
  return { question, correctAnswer };
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { description, setPrimeRound };
