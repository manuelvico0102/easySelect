import pino from 'pino';
import { Configuracion } from './configuracion';

export class Logger {
    private logger: pino.Logger;

    constructor(configuracion: Configuracion) {
        this.logger = pino({
            level: configuracion.LogLevel,
        }, pino.destination(configuracion.LogFilePath));
    }

    public info(message: string): void {
      this.logger.info(message);
    }

    public debug(message: string): void {
        this.logger.debug(message);
    }

    public error(message: string): void {
      this.logger.error(message);
    }
}

export const loggerConfigurado = {
  logger: new Logger(new Configuracion()),
  config: new Configuracion(),
};