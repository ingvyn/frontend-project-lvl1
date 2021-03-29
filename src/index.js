import getUserResponse from './cli.js';

const doGame = (description, setNextRound, userName) => {
  console.log(description);
  let countRounds = 0;
  let userAnswer;
  let roundOptions = {};
  do {
    countRounds += 1;
    roundOptions = setNextRound();
    console.log(`Question: ${roundOptions.question}`);
    userAnswer = getUserResponse('Your answer: ');
    if (userAnswer === roundOptions.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundOptions.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } while (countRounds < 3);
  console.log(`Congratulations, ${userName}!`);
};

export default doGame;
