#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { description, setPrimeRound } from '../src/games/brain-prime.js';
import doGame from '../src/index.js';

const userName = greeting();
doGame(description, setPrimeRound, userName);
