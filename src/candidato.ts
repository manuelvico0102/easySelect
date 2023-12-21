
import type {NivelIdioma, NivelLenguajeProgramacion, Idiomas, LenguajesDeProgramacion } from './types';
import { loggerConfigurado } from './utils/logger';

export class Candidato {
    private nombre: string;
    private apellidos: string;
    private correoElectronico: string;
    private telefono: string;

    private idiomas: Idiomas;
    private lenguajesDeProgramacion: LenguajesDeProgramacion;
    
    private logger : any = loggerConfigurado.logger;

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
      this.logger.info(`Candidato creado: ${this.nombre} ${this.apellidos}`);
    }
}
