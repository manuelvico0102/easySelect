import { Candidato } from "./candidato";
import { loggerConfigurado } from './utils/logger';

class Oferta {
    private id: string;
    private candidatos: Candidato[];
    private logger : any = loggerConfigurado.logger;

    constructor(id: string, candidatos: Candidato[] = []) {
        this.id = id;
        this.candidatos = candidatos;
        this.logger.info(`Oferta creada: ${this.id}`);
    }
    
}