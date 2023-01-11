import readline from "readline";
import { optionsAvailable, showMenu } from "./options.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getOption() {
  console.log("\n¿Quieres un abrazo?");
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question("\n\t", (option) => {
      rl.pause();
      if (option > 0 && option < optionsAvailable.length) {
        resolve(option);
      } else {
        reject();
      }
    });
  });
  return promise;
}

async function playHug() {
  let option;
  let end = false;
  
  do {
    try {
      option = await getOption();
    } catch (error) {
      optionsAvailable[0].function();
      process.exit(0);
    }

    if (option > 0 && option < optionsAvailable.length) {
      optionsAvailable[option].function();
    } else {
      end = true;
    }
  } while (end === false);
}

playHug();
