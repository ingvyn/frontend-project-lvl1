#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { description, setCalcRound } from '../src/games/brain-calc.js';
import doGame from '../src/index.js';

const userName = greeting();
doGame(description, setCalcRound, userName);
