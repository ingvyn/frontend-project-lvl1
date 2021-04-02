import { getRandomNumber } from '../math.js';

const maxEdgeOfFirstElement = 10;
const minEdgeOfStep = 2;
const maxEdgeOfStep = 6;
const minNumberOfElements = 5;
const maxNumberOfElements = 10;

const setProgressionRound = () => {
  const progressionCollection = [];
  const firstElement = getRandomNumber(1, maxEdgeOfFirstElement);
  const stepProgression = getRandomNumber(minEdgeOfStep, maxEdgeOfStep);
  const numberOfElements = getRandomNumber(minNumberOfElements, maxNumberOfElements);
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
