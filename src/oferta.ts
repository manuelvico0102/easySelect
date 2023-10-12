import { Candidato } from "./candidato";

class Oferta {
    private id: string;
    private descripcion: string;
    private candidatos: Candidato[];

    obteneId(): string{
        return this.id;
    }

    obtenerDescripcion(): string{
        return this.descripcion;
    }

    obtenerCandidatos(): Candidato[] {
        return this.candidatos;
    }
    
  }
  