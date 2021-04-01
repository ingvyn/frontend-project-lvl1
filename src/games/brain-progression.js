import { getRandomNumber } from '../math.js';

const setProgressionRound = () => {
  const progressionCollection = [];
  const firstElement = getRandomNumber(1, 10);
  const stepProgression = getRandomNumber(2, 6);
  const numberOfElements = getRandomNumber(5, 10);
  for (let i = 0, nextElement = firstElement; i < numberOfElements;
    i += 1, nextElement += stepProgression) {
    progressionCollection.push(nextElement);
  }
  const hiddenNumber = getRandomNumber(0, numberOfElements - 1);
  const correctAnswer = String(progressionCollection[hiddenNumber]);
  const showCollection = progressionCollection;
  showCollection[hiddenNumber] = '..';
  const question = showCollection.join(' ');
  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export { description, setProgressionRound };
