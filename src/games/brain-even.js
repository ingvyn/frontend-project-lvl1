const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const getRandomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;
const setEvenRound = () => {
  const roundOptions = {};
  roundOptions.question = getRandomNumber();
  roundOptions.correctAnswer = isEven(roundOptions.question);
  return roundOptions;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export { description, setEvenRound };
