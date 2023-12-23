import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export class Configuracion {
    get(clave: string): string {
        const value = process.env[clave];

        if (!value) {
            throw new Error(`La variable de entorno ${clave} no está configurada.`);
        }
        return value;
    }
}