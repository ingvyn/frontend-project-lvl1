import readlineSync from 'readline-sync';

const getUserResponse = (consoleQuestion) => readlineSync.question(consoleQuestion);
export default getUserResponse;
