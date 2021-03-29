#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { description, setEvenRound } from '../src/games/brain-even.js';
import doGame from '../src/index.js';

const userName = greeting();
doGame(description, setEvenRound, userName);
