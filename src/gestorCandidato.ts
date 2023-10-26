import { Candidato } from "./candidato";

const fs = require('fs');

class GestorCandidato {
    archivo: string;
    candidato: Candidato;

    constructor(filePath: string, candidato: Candidato) {
        this.archivo = filePath;
        this.candidato = candidato;
    }

}

