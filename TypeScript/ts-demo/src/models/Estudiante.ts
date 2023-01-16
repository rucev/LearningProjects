import { Curso } from "./Cursos";

export class Estudiante {
  //Propiedades de clase:
  nombre: string;
  apellidos?: string;
  cursos: Curso[];
  private ID: string = "1234";

  //Constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    this.nombre = nombre;
    this.cursos = cursos;
    this.apellidos = apellidos ? apellidos : undefined;
  };

  get horasEstudiadas(): number {
    let horasEstudiadas: number = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  };

  get ID_Estudiante(): string {
    return this.ID;
  };
}
