const optionsAvailable = [
    {
        id: 0,
        description: "exit",
        function: ()  => console.log("\n¿¿Ni siquiera le vas a dar a una opción valida?? (T.T)\nPUES TE CIERRO EL PROGRAMA")
    },
    {
        id: 1,
        description: "¡Claro!",
        function: () => console.log("\nYeeei (^·^)"),
    },
    {
        id: 2,
        description: "¡Mejor dos!",
        function: () => console.log("\nWooooh (^o^)"),
    }
];

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

export {optionsAvailable, showMenu};