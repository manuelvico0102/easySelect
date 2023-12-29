# Logger

## Criterios de decisión

Para elegir una biblioteca de logs para nuestro proyecto tendremos que tener en cuenta una seria de criterios que serán los siguientes:

- **Personalización**: La biblioteca de logs debe permitir personalizar la salida de los logs, como por ejemplo el formato de la fecha, posibilidad de añadir desde que fichero se invoca el log (información contextual)...

- **Compatibilidad**:  La biblioteca de logs debe ser compatible con Node.js.

- **Puntuación**: La biblioteca de logs debe tener una buena puntuación en [Snyk Advisor](https://snyk.io/advisor/).

## Bibliotecas de logs

Existen diferentes bibliotecas de logs que podemos utilizar con Node.js, entre los que se encuentran: Winston, Pino y Log4js.

- [Winston](https://github.com/winstonjs/winston): Winston es una biblioteca de logs que permite personalizar la salida de los logs y es compatible con Node.js y TypeScript. Winston tiene una puntuación de 92 en Snyk Advisor.

- [Pino](https://github.com/pinojs/pino): Pino es una biblioteca de logs que permite personalizar la salida de los logs y es compatible con Node.js y TypeScript. Pino tiene una puntuación de 98 en Snyk Advisor. El formato de salida pude ser JSON o formato plano.
    
- [log4js](https://github.com/log4js-node/log4js-node): log4js es una biblioteca de logs que permite personalizar la salida de los logs y es compatible con Node.js. log4js tiene una puntuación de 82 en Snyk Advisor. Diferentes tipos de formatos de logs.

Haay otros logs específicos para TypeScript como [ts-log](https://www.npmjs.com/package/ts-log) y [typescript-logging](https://www.npmjs.com/package/typescript-logging) y [missionlog](https://www.npmjs.com/package/missionlog). Sin embargo, como tenían una muy baja puntuación en Snyk Advisor no las he tenido en cuenta.

## Elección de la biblioteca de logs

Las tres bibliotecas que he indicando anteriormente son bibliotecas de logs que permiten personalizar la salida de los logs y son compatibles con Node.js. Sin embargo, la biblioteca de logs que he escogido para mi proyecto es Pino. Esto se debe a que Pino tiene una puntuación más alta en Snyk Advisor que las otras dos bibliotecas.
