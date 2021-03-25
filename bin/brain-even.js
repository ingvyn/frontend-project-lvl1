#!/usr/bin/env node
import getUserResponse from '../src/cli.js';
import getRandomNumber from '../src/randomNumber.js';
import isEven from '../src/evenNumber.js';

console.log('Welcome to the Brain Games!');
const userName = getUserResponse('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let countQuestions = 0;
let userAnswer;
let nextNumber;
let correctAnswer;
let isAnswerCorrect = false;
do {
  countQuestions += 1;
  nextNumber = getRandomNumber();
  correctAnswer = isEven(nextNumber) ? 'yes' : 'no';
  userAnswer = getUserResponse(`Question: ${nextNumber}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    isAnswerCorrect = true;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    isAnswerCorrect = false;
    break;
  }
} while (countQuestions < 3);
if (isAnswerCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
