const getRandomNumber = (min = 1, max = 29) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNumber;
