
import type {NivelIdioma, NivelLenguajeProgramacion, Idiomas, LenguajesDeProgramacion } from './types';
import { loggerConfigurado } from './utils/logger';

const logger = loggerConfigurado.logger;

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
      logger.info(`Candidato creado: ${this.nombre} ${this.apellidos}`);
    }
}
