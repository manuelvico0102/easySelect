import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export class Configuracion {
    get(clave: string): string {
        const value = process.env[clave];

        if (!value) {
            const githubEnvClave = process.env[`ENV_${clave}`];

            if (githubEnvClave) {
                return githubEnvClave;
            }

            throw new Error(`La variable de entorno ${clave} no está configurada.`);
        }
        return value;
    }
}