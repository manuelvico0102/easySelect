import { Candidato } from "./candidato";

const fs = require('fs');

class GestorCandidato {
    archivo: string;
    candidato: Candidato;

    constructor(filePath: string) {
        this.archivo = filePath;
        this.candidato = this.procesarArchivo();
    }

    private procesarArchivo() {
        const data = fs.readFileSync(this.archivo, 'utf8');
        const lines = data.split('\n');
        const candidatoData: { [key: string]: string } = {};

        lines.forEach((line: { split: (arg0: string) => [any, any]; }) => {
            const [key, value] = line.split(': ');
            candidatoData[key] = value;
        });

        const nombre = candidatoData['nombre'];
        const apellidos = candidatoData['apellidos'];
        const correoElectronico = candidatoData['correoElectronico'];
        const telefono = candidatoData['telefono'];
        const disponibilidad = candidatoData['disponibilidad'] as "baja" | "media" | "alta";

        // Procesar idiomas
        const idiomasData = candidatoData['idiomas'].split(', ');
        const idiomas: { [key: string]: "B1" | "B2" | "C1" | "C2" | "Nativo" } = {};
        idiomasData.forEach((idiomaInfo) => {
            const [idioma, nivel] = idiomaInfo.split(':');
            idiomas[idioma] = nivel as "B1" | "B2" | "C1" | "C2" | "Nativo";
        });

        // Procesar lenguajes de programación
        const lenguajesData = candidatoData['lenguajesDeProgramacion'].split(', ');
        const lenguajesDeProgramacion: { [key: string]: "principiante" | "intermedio" | "avanzado" } = {};
        lenguajesData.forEach((lenguajeInfo) => {
            const [lenguaje, nivel] = lenguajeInfo.split(':');
            lenguajesDeProgramacion[lenguaje] = nivel as "principiante" | "intermedio" | "avanzado";
        });

        const lenguajesDeProgramacionFinal = lenguajesDeProgramacion;

        return new Candidato(nombre, apellidos, correoElectronico, telefono, disponibilidad, idiomas, lenguajesDeProgramacionFinal);
    }
}

