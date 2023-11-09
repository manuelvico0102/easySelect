import { Candidato } from "./candidato";
import * as fs from 'fs';

export class GestorCandidato {
    archivo: string;
    datos: { [clave: string]: (archivo: string) => string } = {};

    constructor(filePath: string) {
        this.archivo = filePath;
    }

    extraerCandidato(): Candidato {
        const data = fs.readFileSync(this.archivo, 'utf8');
        const lines = data.split('\n');
        const candidatoData: { [key: string]: string } = {};

        lines.forEach((line: string) => {
            const [key, value] = line.split(': ');
            if (value !== undefined) {
                candidatoData[key] = value.trim();
            }
        });

        const nombre = candidatoData['nombre'] || '';
        const apellidos = candidatoData['apellidos'] || '';
        const correoElectronico = candidatoData['correoElectronico'] || '';
        const telefono = candidatoData['telefono'] || '';

        const idiomasData = (candidatoData['idiomas'] || '').split(', ');
        const idiomas: { [key: string]: "B1" | "B2" | "C1" | "C2" | "Nativo" } = {};
        idiomasData.forEach((idiomaInfo: string) => {
            const [idioma, nivel] = idiomaInfo.split(':');
            idiomas[idioma] = nivel as "B1" | "B2" | "C1" | "C2" | "Nativo";
        });

        const lenguajesData = (candidatoData['lenguajesDeProgramacion'] || '').split(', ');
        const lenguajesDeProgramacion: { [key: string]: "principiante" | "intermedio" | "avanzado" } = {};
        lenguajesData.forEach((lenguajeInfo: string) => {
            const [lenguaje, nivel] = lenguajeInfo.split(':');
            lenguajesDeProgramacion[lenguaje] = nivel as "principiante" | "intermedio" | "avanzado";
        });

        return new Candidato(nombre, apellidos, correoElectronico, telefono, idiomas, lenguajesDeProgramacion);
    }

}

