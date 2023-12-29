import { Candidato } from "../src/candidato";
import { GestorCandidato } from "../src/gestorCandidato";
import { loggerConfigurado } from '../src/utils/logger';

const logger = loggerConfigurado.logger;
const mockLogger = jest.spyOn(logger, 'info');
const mockLoggerDebug = jest.spyOn(logger, 'debug');

describe('GestorCandidato', () => {
    it('Generar log de extracción de candidato', () => {
        const gestorCandidato = new GestorCandidato();
        const candidato = gestorCandidato.extraerCandidato("data/candidato_completo.txt");

        expect(mockLoggerDebug).toHaveBeenCalledWith('Idiomas extraidos: {"Español":"Nativo","Inglés":"B2","Francés":"B1"}');
        expect(mockLoggerDebug).toHaveBeenCalledWith('Lenguajes de programacion extraidos: {"Python":"avanzado","C++":"intermedio","Java":"principiante"}');
        expect(mockLogger).toHaveBeenCalledWith('Candidato creado: Manuel Vico Arboledas');
    });
});