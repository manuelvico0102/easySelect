import { Candidato } from "./candidato";

class Oferta {
    private id: string;
    private descripcion: string;
    private candidatos: Candidato[];

    constructor(id: string, descripcion: string, candidatos: Candidato[] = []) {
        this.id = id;
        this.descripcion = descripcion;
        this.candidatos = candidatos;
    }
    
}