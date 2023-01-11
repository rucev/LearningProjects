import readline from "readline";
import { optionsAvailable } from "./options-menu.js";

/*
Ejecución del programa y del menu
*/

const showMenu = () => {
  console.log("\nOpciones\n");
  for (let index = 1; index < optionsAvailable.length; index++) {
    console.log(
      "\t" +
        optionsAvailable[index].id +
        "\t" +
        optionsAvailable[index].description
    );
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question(
      "\nElige el número de la opción qué quieres hacer\n\t",
      (option) => {
        rl.pause();
        if (option > 0 && option < optionsAvailable.length) {
          resolve(optionsAvailable[option].function());
        } else {
          reject(optionsAvailable[0].function() + process.exit(0));
        }
      }
    );
  });

  promise.then((value) => {
    main(), value;
  });
};

main();
