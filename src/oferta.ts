import { Candidato } from "./candidato";
import { loggerConfigurado } from './utils/logger';

const logger = loggerConfigurado.logger;

class Oferta {
    private id: string;
    private candidatos: Candidato[];

    constructor(id: string, candidatos: Candidato[] = []) {
        this.id = id;
        this.candidatos = candidatos;
        logger.info(`Oferta creada: ${this.id}`);
    }
    
}