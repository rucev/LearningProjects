import readline from "readline";
import { optionsAvailable, showMenu } from "./options.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const playHug = () => {
  console.log("\n¿Quieres un abrazo?");
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question("\n\t", (option) => {
      rl.pause();
      if (option > 0 && option < optionsAvailable.length) {
        resolve(optionsAvailable[option].function());
      } else {
        reject(optionsAvailable[0].function() + process.exit(0));
      }
    });
  });

  promise.then((value) => {
    playHug(), value;
  });
};

playHug();
