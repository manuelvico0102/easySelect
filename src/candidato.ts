
import type { Disponibilidad, NivelIdioma, NivelLenguajeProgramacion, Idiomas, LenguajesDeProgramacion } from './types';

export class Candidato {
    private nombre: string;
    private apellidos: string;
    private correoElectronico: string;
    private telefono: string;
    private disponibilidad: Disponibilidad;

    private idiomas: Idiomas;
    private lenguajesDeProgramacion: LenguajesDeProgramacion;

    constructor(
      nombre: string,
      apellidos: string,
      correoElectronico: string,
      telefono: string,
      disponibilidad: Disponibilidad,
      idiomas: Idiomas,
      lenguajesDeProgramacion: LenguajesDeProgramacion) 
      {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correoElectronico = correoElectronico;
      this.telefono = telefono;
      this.disponibilidad = disponibilidad;
      this.idiomas = idiomas;
      this.lenguajesDeProgramacion = lenguajesDeProgramacion;
    }

    getNombre(): string {
      return this.nombre;
    }

    getApellidos(): string {
      return this.apellidos;
    }

    getCorreoElectronico(): string {
      return this.correoElectronico;
    }

    getTelefono(): string {
      return this.telefono;
    }

    getDisponibilidad(): Disponibilidad {
      return this.disponibilidad;
    }

    getIdiomas(): Idiomas {
      return this.idiomas;
    }

    getLenguajesDeProgramacion(): LenguajesDeProgramacion {
      return this.lenguajesDeProgramacion;
    }

    getNivelIdioma(idioma: string): NivelIdioma {
      return this.idiomas[idioma];
    }

    getNivelLenguajeProgramacion(lenguaje: string): NivelLenguajeProgramacion {
      return this.lenguajesDeProgramacion[lenguaje];
    }

}
