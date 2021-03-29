import getUserResponse from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserResponse('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greeting;
