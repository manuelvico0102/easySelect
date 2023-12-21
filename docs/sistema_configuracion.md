# Sistema de configuración

## Criterios de decisión

- **Puntuación**: La biblioteca de configuración debe tener una buena puntuación en [Snyk Advisor](https://snyk.io/advisor/).

- **Mantenimiento**: La biblioteca de configuración debe estar mantenida, para ello también se tendrá en cuenta lo que aparezca en Snyk Advisor.

- **Compatibilidad**: La biblioteca de configuración debe ser compatible para nuestro proyecto.

## Opciones

Existen diferentes bibliotecas de configuración que podemos utilizar, entre los que se encuentran: 

- [config](https://github.com/node-config/node-config): config es una biblioteca de configuración que permite cargar variables de entorno desde un fichero .json. config tiene una puntuación de 80 en Snyk Advisor. Su mantenimiento es sostenible (sustainable).

- [nconf](https://github.com/indexzero/nconf): nconf es una biblioteca de configuración que permite cargar variables de entorno desde un fichero .json. nconf tiene una puntuación de 89 en Snyk Advisor. Su mantenimiento esta activo (healthy)

- [dotenv](https://github.com/motdotla/dotenv): dotenv es una biblioteca de configuración que permite cargar variables de entorno desde un fichero .env. dotenv tiene una puntuación de 86 en Snyk Advisor. Su mantenimiento es activo (healthy).

## Elección del sistema de configuración

Finalmente, para mi proyecto he escogido dotenv como sistema de configuración. Esto se debe a que dotenv es una biblioteca de configuración que permite cargar variables de entorno desde un fichero .env. Además, dotenv tiene una puntuación alta en Snyk Advisor y su mantenimiento es activo. Sin embargo, podría haber escogido nconf ya que tiene una puntuación más alta en Snyk Advisor, pero he escogido dotenv porque me ha parecido más sencillo de utilizar al revisar la documentación de ambos.

