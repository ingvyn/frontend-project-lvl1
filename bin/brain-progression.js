#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { description, setProgressionRound } from '../src/games/brain-progression.js';
import doGame from '../src/index.js';

const userName = greeting();
doGame(description, setProgressionRound, userName);
