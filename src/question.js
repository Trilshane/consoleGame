import readlineSync from "readline-sync";
import { getRandomNumber } from "./numebrs.js";

export function getQuestion(name, count = 3) {
  if (count == 0) {
    return console.log(`Congratulations, ${name}!`);
  }
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");
  if (
    (number % 2 === 0 && (answer === "yes" || answer === "Yes")) ||
    (number % 2 !== 0 && (answer === "no" || answer === "No"))
  ) {
    console.log("Correct!");
    return getQuestion(name, (count -= 1));
  } else {
    console.log(`Let's try again, ${name}!`);
    return getQuestion(name, (count = 3));
  }
}
