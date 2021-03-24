import readlineSync from 'readline-sync';

const setUser = (nameRequestMessage = 'May I have your name? ') => {
  const name = readlineSync.question(nameRequestMessage);
  console.log(`Hello, ${name}!`);
};
export default setUser;
