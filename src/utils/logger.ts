import pino from 'pino';
import { Configuracion } from './configuracion';
import * as fs from 'fs';


export class Logger {
    private logger: pino.Logger;

    constructor(configuracion: Configuracion) {
      const streams = [
        {level: configuracion.get('LOG_LEVEL'), stream: process.stdout},
        {level: configuracion.get('LOG_LEVEL'), stream: fs.createWriteStream('logs.log', {flags: 'a'})},
      ]

      this.logger = pino({
          level: configuracion.get('LOG_LEVEL'),
      }, pino.multistream(streams));
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