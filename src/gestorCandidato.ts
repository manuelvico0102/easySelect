import { Candidato } from "./candidato";
import { Idiomas, LenguajesDeProgramacion, NivelIdioma, NivelLenguajeProgramacion } from "./types";
import * as fs from 'fs';
import { loggerConfigurado } from './utils/logger';

const logger = loggerConfigurado.logger;

export class GestorCandidato {
    constructor() { 
    }

    extraerCandidato(archivo: string): Candidato {
        const data = fs.readFileSync(archivo, 'utf8');

        const nombreCompletoMatch = data.match(/Nombre\n\n(.*)/);
        const nombreCompleto = nombreCompletoMatch ? nombreCompletoMatch[1].trim() : '';
        const [, apellidos, nombre] = nombreCompleto.match(/(.+), (.+)/) || [, '', ''];
        
        const correoElectronicoMatch = data.match(/Correo electrónico\n\n(.+)/);
        const correoElectronico = correoElectronicoMatch ? correoElectronicoMatch[1].trim() : '';
    
        const telefonoMatch = data.match(/Teléfono\n\n(.+)/);
        const telefono = telefonoMatch ? telefonoMatch[1].trim() : '';
        
        const idiomas = this.extraerIdiomas(data);

        const lenguajesDeProgramacion = this.extraerLenguajesDeProgramacion(data);

        return new Candidato(nombre, apellidos, correoElectronico, telefono, idiomas, lenguajesDeProgramacion);
    }

    private extraerIdiomas(data: string): Idiomas{
        const idiomas: { [idioma: string]: { lectura: string, escritura: string, oral: string } } = {};
        let lenguajeMaterno = '';

        const regexIdioma = /otros idiomas\n+([^]*?)\n+Capacidades y aptitudes sociales/gi;
        const regexDetalleIdioma = /([A-Za-záéíóúüñ\s]+)\s*•\s*Lectura\s*\n\n(\w+)\s*•\s*Escritura\s*\n\n(\w+)\s*•\s*Expresión oral\s*\n\n(\w+)/g;
        const regexLenguaMaterna = /Lengua materna\s*\n\n\s*([A-Za-záéíóúüñ\s]+)\s*\n\notros idiomas/;

        const matchLenguaMaterna = regexLenguaMaterna.exec(data);
        if (matchLenguaMaterna) {
            lenguajeMaterno = matchLenguaMaterna[1].trim();
        }

        const matchIdiomas = regexIdioma.exec(data);
        if (matchIdiomas) {
            const idiomasTexto = matchIdiomas[1];
            let matchDetalle;
            while ((matchDetalle = regexDetalleIdioma.exec(idiomasTexto)) !== null) {
                const idioma = matchDetalle[1].trim();

                if (idioma !== lenguajeMaterno) {
                    const lectura = matchDetalle[2].trim();
                    const escritura = matchDetalle[3].trim();
                    const oral = matchDetalle[4].trim();

                    idiomas[idioma] = { lectura, escritura, oral };
                }
            }
        }
        
        const idiomasNormalizados: Idiomas = {};
        if(lenguajeMaterno !== '')
            idiomasNormalizados[lenguajeMaterno] = "Nativo" as NivelIdioma;
        for (const idioma in idiomas) {
            const { lectura, escritura, oral } = idiomas[idioma];
            idiomasNormalizados[idioma] = this.elegirNivelIdioma(lectura, escritura, oral);
        }
        
        logger.debug(`Idiomas extraidos: ${JSON.stringify(idiomasNormalizados)}`);
        return idiomasNormalizados;
    }

    private elegirNivelIdioma(lectura: string, escritura: string, oral: string): NivelIdioma {
        const niveles: { [key: string]: number } = {
            'C2': 4,
            'C1': 3,
            'B2': 2,
            'B1': 1,
        };
      
        const nivelesArray = [lectura, escritura, oral];
      
        let nivelMinimo = nivelesArray[0];
      
        for (const nivel of nivelesArray) {
            if (niveles[nivel] < niveles[nivelMinimo]) {
                nivelMinimo = nivel;
            }
        }
      
        return nivelMinimo as NivelIdioma;
      }

    private extraerLenguajesDeProgramacion(data: string): LenguajesDeProgramacion {
        const regex = /([A-Za-z+]+): (\w+)/g;
        const lenguajesDeProgramacion: LenguajesDeProgramacion = {};
        
        let match;
        while ((match = regex.exec(data)) !== null) {
            const lenguaje = match[1];
            const nivelTexto = match[2].toLowerCase();
            const nivel = nivelTexto as NivelLenguajeProgramacion;
            lenguajesDeProgramacion[lenguaje] = nivel;
        }
        
        logger.debug(`Lenguajes de programacion extraidos: ${JSON.stringify(lenguajesDeProgramacion)}`);
        return lenguajesDeProgramacion;
    }
    
    
    
    
}

