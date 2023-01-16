import { ILibro } from "./interfaces/iLibro";


export class Novela implements ILibro {
    titulo: string;
    resumen: string;
    editado: boolean;
    precio: number;

    constructor(titulo: string, resumen: string, editado: boolean, precio: number){
        this.titulo = titulo;
        this.resumen = resumen;
        this.editado = editado;
        this.precio = precio;
    }



}