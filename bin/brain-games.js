#!/usr/bin/env node
import getUserResponse from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserResponse('May I have your name? ');
console.log(`Hello, ${userName}!`);
let countQuestions = 0;
let userAnswer;
do {
  countQuestions += 1;
}
