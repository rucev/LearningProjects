import readline from "readline";
import { optionsAvailable, showMenu } from "./options.js";

const question = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n¿Quieres un abrazo?");
  showMenu();

  rl.question("\n\t", (option) => {
    option = parseInt(option);
    if (option > 0 && option < optionsAvailable.length) {
      optionsAvailable[option].function();
    } else {
      optionsAvailable[0].function();
      process.exit(0);
    }
    
    rl.close();
    question();
  });
};

question();
