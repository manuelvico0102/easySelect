import { Candidato } from "./candidato.ts";

class Oferta {
    private id: string;
    private candidatos: Candidato[];

    constructor(id: string, candidatos: Candidato[] = []) {
        this.id = id;
        this.candidatos = candidatos;
    }
    
}