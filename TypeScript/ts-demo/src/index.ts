import { timeStamp } from "console";
import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";
import { Curso } from "./models/Cursos";
import { Estudiante } from "./models/Estudiante";
import { LISTA_CURSOS } from "./mock/cursos";
import { Empleado } from "./models/Persona";
import { ILibro } from "./models/interfaces/iLibro";
import { Novela } from "./models/Libro";

console.log("Demo TS");

// Declaración de Variables:

let nombre: string = "Rucev"; // también valen var y const

console.log("Hola con '+', " + nombre); // distintos tipos de concatenación
console.log(`Hola con '$', ${nombre}`);
console.log("Hola con ',',", nombre);

const PI: number = 3.1416;
let meh: any = "whatever"; // caso único, la variable puede cambiar de tipo
let error: boolean;
error = false;

console.log(`Hay error? ${error}`);

// Instanciación múltiple de variables

let a: string, b: boolean, c: number; // tres variables sin valor inicial
a = "TypeScript";
b = true;
c = 2.4;

// BuiltIn Types: number, string, boolean, void, null y undefined

// Tipo de datos complejos

//Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"];

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, "hola", true, 56];

// Enumerados
enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces: sirven para definir propiedades y tipos de funciones y datos

interface Tarea {
  nombre: string;
  estado: Estados;
  importancia: number;
}

// Podemos crear variables que sigan la interface:

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  importancia: 10,
};

// Asignación de múltiples variables

let miTarea = {
  titulo: "Mi tarea",
  estado: Estados.Completado,
  importancia: 1,
};

// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miImportancia = miTarea.importancia;

// Declaración con factor de propagación (spread)
let { titulo, estado, importancia } = miTarea;

// spread en listas
let listaMamiferos: string[] = ["Perro", "Gato"];
let listaAnimales: string[] = [...listaMamiferos, "Pingüino", "Rana"];
let listaPlantas: string[] = ["Ficus", "Cactus"];
let listaSeresVivos = [...listaAnimales, ...listaPlantas];

// spread en objetos

let estadoApp = {
  usuario: "admin",
  session: 3,
  jwt: "Bearer12345",
};

// cambio de valor por propagación
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};

// Types de TypesScript

type Producto = {
  precio: number;
  nombre: string;
  year: number;
};

let coche: Producto = {
  nombre: "Batmovil",
  precio: 42000,
  year: 2020,
};

// Condicionales:

// Operador Ternarios
console.log(
  coche.year < 2020
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

// if-else
if (error) {
  console.log("Hay error");
} else {
  console.log("No hay error");
}

// if - else if - else
if (coche.year < 2020) {
  console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.year === 2020) {
  console.log(`Coche: ${coche.nombre} es del 2020`);
} else {
  console.log(`Coche: ${coche.nombre} es nuevo`);
}

// Switch
switch (tarea1.estado) {
  case Estados.Completado:
    console.log("La tarea está completada");
    break;
  case Estados.Incompleto:
    console.log("La tarea está incompleta");
    break;
  case Estados.Pendiente:
    console.log("La tarea está pendiende de comprobarse");
    break;
  default:
    break;
}

// Loops

let listaTareasNueva: Tarea[] = [
  {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    importancia: 2,
  },
  {
    nombre: "Tarea 2",
    estado: Estados.Incompleto,
    importancia: 0,
  },
  {
    nombre: "Tarea 1",
    estado: Estados.Completado,
    importancia: 9,
  },
];

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

for (let index: number = 0; index < listaTareasNueva.length; index++) {
  const tarea: Tarea = listaTareasNueva[index];
  console.log(`${index} - ${tarea.nombre}`);
}

for (const nombre in tarea1) {
  if (Object.prototype.hasOwnProperty.call(tarea1, nombre)) {
    const element = tarea1.nombre;
  }
}

while (tarea1.estado !== Estados.Completado) {
  if (tarea1.importancia == 10) {
    tarea1.estado = Estados.Completado;
  } else {
    tarea1.importancia++;
  }
}

// Do-While se realiza al menos una vez

do {
  if (tarea1.importancia == 10) {
    tarea1.estado = Estados.Completado;
  } else {
    tarea1.importancia++;
  }
} while (tarea1.estado !== Estados.Completado);

// Funciones

/**
 * Función que dice estar documentada
 */
function funcionDocumentada() {
  console.log("Hola, soy una función muy documentada");
}

funcionDocumentada();

/**
 * Función que saluda y dice su nombre
 * @param nombre Nombre de la función
 */
function funcionConNombre(nombre: string) {
  console.log(`Hola, soy ${nombre}`);
}

funcionConNombre("función muy documentada");

/**
 * Despedirse de nombre
 * @param nombre por defecto usuario
 */
function despedirPersona(nombre: string = "usuario") {
  console.log(`Adiós, ${nombre}`);
}

despedirPersona();
despedirPersona("tron");

// Sin por defecto:
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`Adiós, ${nombre}`);
  } else {
    console.log(`¡Adios!`);
  }
}

despedidaOpcional();
despedidaOpcional("usuario");

// Varios parametros:
function variosParams(
  nombre: string,
  apellidos?: string,
  edad: number | string = 18
) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos}`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("DonNombre");
variosParams("Don", "Apellido", 81);
variosParams("Sir", "String", "muchos");

function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Bruce", "Wayne");
console.log(nombreCompleto);

// factor de propagación
function ejemploMultiParam(...nombres: string[]): void {
  //Avisar de que no devuelve nada!
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultiParam("Bruce", "Clark");

const ejemploArrow = (nombre: string, apellido: string): string =>
  `${nombre} ${apellido}`;

console.log(ejemploArrow("Robin", "Hood"));

async function ejemploAsync(): Promise<string> {
  await console.log("Tarea a completar antes de seguir");
  console.log("tarea completada");
  return "completado";
}

// Función generadora
function* ejemploGenerator() {
  let index: number = 0;
  while (index < 5) {
    yield index++;
  }
}

let generadora = ejemploGenerator();

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value); // +5 = undefined!

// Sobrecarga de funciones:
//para evitar el uso excesivo de funciones similares es mejor añadir varios tipos de parametros a una misma (ejemplo:)

function mostrarError(error: string | number): void {
  console.log("Ha habido un error:", error);
}

// PERSISTENCIA DE DATOS:
//1. LocalStorage --> Almacena los datos en el navegador (no se eliminan automáticamente)
//2. SesionStorage --> Los datos persisten en lo que dure la sesión del navegador.
//3. Cookies --> Tienen una fecha de caducidad y un ámbito de URL.

//LocalStorage (Sesion):

function guardar(): void {
  localStorage.set("nombre", "Rucev");
}

function leer(): void {
  let nombre = localStorage.get("nombre");
}

//COOKIES:

const cookieOptions = {
  name: "usuario", // string,
  value: "rucev", // string,
  expires: new Date(2099, 10, 1), // optional Date,
  path: "/", // optional string,
};

setCookie(cookieOptions);

getCookieValue("usuario");

deleteCookie("usuario");
deleteAllCookies();

// getEvent:

class Temporizador {
  public terminar?: (tiempo: number) => void;
  public empezar(): void {
    setTimeout(() => {
      if (!this.terminar) return;
      this.terminar(Date.now());
    }, 10000);
  }
}

const miTemporizador: Temporizador = new Temporizador();

miTemporizador.terminar = (tiempo: number) => {
  console.log("Evento terminado en ", tiempo);
};

miTemporizador.empezar();

delete miTemporizador.terminar;

// Saber la instancia:

//typeof -> string por ejemplo
//instanceof -> clase a la que pertenece
// si el codigo esta bien documentado, no hacen falta

// Clases

const phoenix: Estudiante = new Estudiante("Phoenix", LISTA_CURSOS);

console.log(phoenix.horasEstudiadas);

let fechaNacimiento = new Date(1999, 11, 10);

if (fechaNacimiento instanceof Date) {
  console.log("yees");
}

if (phoenix instanceof Estudiante) {
  console.log(phoenix.nombre + " es un estudiante");
}

let empleada: Empleado = new Empleado("Maya", "Fey", 19, 1500);

empleada.saludar();

// Uso interface

let libroEjemplo: ILibro = {
  titulo: "",
  resumen: "",
  editado: false,
  precio: 0,
};

let ejemploNovela = new Novela("Ejemplo Titulo", "Ejemplo Resumen", true, 17);

console.log(ejemploNovela.titulo);

// Decoradores experimentales ---> @
// - Clases
// - Parametros
// - Metodos
// - Propiedades

function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
    });
  };
}

class PruebaDecorador {
  @Override("Prueba")
  nombre: string = "Char";
}

let prueba = new PruebaDecorador();

console.log(prueba.nombre);

/*
(refactoring.guru)
 Patrones:
 1. Creacionales:
 - mecanismos de creación de objetos
 - reutilización del código
 - ofrecer flexibilidad al código

 2. Patrones estructurales:
 - eficiencia y flexibilidad de la estructura al definir clases y objetos.
 
 3. Patrones de Comportamiento:
 - centrados en la asignación efectiva de responsabilidad entre objetos.
 - comunicación efectiva entre objetos
 */