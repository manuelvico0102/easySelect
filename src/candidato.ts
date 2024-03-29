
import type {NivelIdioma, NivelLenguajeProgramacion, Idiomas, LenguajesDeProgramacion } from './types';

export class Candidato {
    private nombre: string;
    private apellidos: string;
    private correoElectronico: string;
    private telefono: string;

    private idiomas: Idiomas;
    private lenguajesDeProgramacion: LenguajesDeProgramacion;

    constructor(
      nombre: string,
      apellidos: string,
      correoElectronico: string,
      telefono: string,
      idiomas: Idiomas,
      lenguajesDeProgramacion: LenguajesDeProgramacion) 
      {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correoElectronico = correoElectronico;
      this.telefono = telefono;
      this.idiomas = idiomas;
      this.lenguajesDeProgramacion = lenguajesDeProgramacion;
    }
}
