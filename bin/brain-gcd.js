#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { description, setGcdRound } from '../src/games/brain-gcd.js';
import doGame from '../src/index.js';

const userName = greeting();
doGame(description, setGcdRound, userName);
