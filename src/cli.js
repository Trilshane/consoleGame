import readlineSync from "readline-sync";

export let userName;
export function getUserName() {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello,${name}`);
  userName = name;
}
