import {
  getNames,
  deleteLast,
  deleteRandom,
  getFemalesList,
  checkAllStudentsAreFemale,
  getYoungStudents,
  addRandomStudent,
  getYoungestStudent,
  getAgeAverage,
  addGrades,
  getBestStudents,
  getStudentsNamesAndGradeAverage,
  addPointsToAll
} from "./alumni-service.js";

import { students } from "./challenge.js";

/* 
Menu de opciones
*/

const optionsAvailable = [
  {
    id: 0,
    description: "exit",
    function: () => console.log("\nERROR: Opción no disponible. Aplicación cerrada."),
  },
  {
    id: 1,
    description: "Mostrar en formato de tabla todo el alumnado.",
    function: () => console.table(students),
  },
  {
    id: 2,
    description:
      "Mostrar por consola la cantidad de alumnado que hay en clase.",
    function: () =>
      console.log("\n" + "Cantidad estudiantes:" + "\n" + students.length),
  },
  {
    id: 3,
    description: "Mostrar por consola todos los nombres del alumnado.",
    function: () => {
      console.log("\n" + "Nombres alumnado:");
      getNames(students);
    },
  },
  {
    id: 4,
    description: "Eliminar el último alumno/a de la clase.",
    function: () => deleteLast(students),
  },
  {
    id: 5,
    description: "Eliminar un alumno/a aleatoriamente de la clase.",
    function: () => deleteRandom(students),
  },
  {
    id: 6,
    description: "Mostrar por consola todos los datos del alumnado femenino.",
    function: () => {
      console.log("\n" + "Datos alumnas:");
      console.log(getFemalesList(students));
    },
  },
  {
    id: 7,
    description:
      "Mostrar por consola el número de chicos y chicas que hay en la clase.",
    function: () =>
      console.log(
        "\n" +
          "Cantidad alumnas: " +
          getFemalesList(students).length +
          "\n" +
          "Cantidad alumnos: " +
          (students.length - getFemalesList(students).length)
      ),
  },
  {
    id: 8,
    description:
      "Mostrar true o false por consola si todo el alumnado de la clase son chicas.",
    function: () => {
      console.log("¿Alumnado 100% femenino?");
      checkAllStudentsAreFemale(students);
    },
  },
  {
    id: 9,
    description:
      "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
    function: () => {
      console.log("\n" + "Alumnado de 20-25 años:");
      getYoungStudents(students);
    },
  },
  {
    id: 10,
    description: "Añadir estudiante random (sin notas).",
    function: () => addRandomStudent(students),
  },
  {
    id: 11,
    description:
      "Mostrar por consola el nombre de la persona más joven de la clase.",
    function: () => {
      console.log("\n" + "Estudiante más joven:");
      getYoungestStudent(students);
    },
  },
  {
    id: 12,
    description:
      "Mostrar por consola la edad media de todo el alumnado de la clase.",
    function: () => {
      console.log("\n" + "Edad media del alumnado:");
      getAgeAverage(students);
    },
  },
  {
    id: 13,
    description: "Mostrar por consola la edad media de las chicas de la clase.",
    function: () => {
      console.log("\n" + "Edad media alumnas:");
      getAgeAverage(getFemalesList(students));
    },
  },
  {
    id: 14,
    description: "Añadir nueva nota (random) a todo el alumnado",
    function: () => addGrades(students),
  },
  {
    id: 15,
    description: "Ordenar al alumnado alfabéticamente según su nombre.",
    function: () =>
      students.sort((itemA, itemB) =>
        itemA.name.localeCompare(itemB.name)
      ),
  },
  {
    id: 16,
    description:
      "Mostrar por consola el nombre del/la estudiante con las mejores notas (en base a la suma total, NO la media)",
    function: () => {
      console.log("\n" + "Estudiante/s con mejores notas:");
      getNames(getBestStudents(students));
    },
  },
  {
    id: 17,
    description:
      "Mostrar por consola la nota media más alta de la clase y a qué estudiante pertenece.",
    function: () => {
      console.log("\n" + "Estudiante/s con mejores notas y su nota media:");
      getStudentsNamesAndGradeAverage(getBestStudents(students));
    },
  },
  {
    id: 18,
    description:
      "Añadir un punto extra a cada nota existente de todo el alumnado. Si no tienen registrada ninguna nota, se les pone un 10.",
    function: () => addPointsToAll(students),
  },
];

export { optionsAvailable };
