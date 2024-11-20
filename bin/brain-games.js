import { getUserName, userName } from "../src/cli.js";
import { getQuestion } from "../src/question.js";

console.log("Welcome to the Brain Games!");
getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
getQuestion(userName);
