# Gestor de dependencias

Despues de haber elegido un runtime, en mi caso Node.js, necesitamos un gestor de dependencias. Un gestor de dependencias es una herramienta que nos permite instalar y gestionar las dependencias de nuestro proyecto.

## Criterios de decisión

Para elegir el gestor de dependencias para nuestro proyecto tendremose en cuenta los siguientes criterios:

- ** Soporte: ** El gestor de dependencias debe tener soporte para el runtime que hemos elegido, en nuestro caso Node.js.

- ** Simplicidad: ** El gestor de dependencias debe ser fácil de usar y de entender.

- ** Comunidad: ** El gestor de dependencias debe tener una comunidad que pueda ayudar a resolver problemas.

## Gestores de dependencias

Existen diferentes gestores de dependencias que podemos utilizar con Node.js, entre los que se encuentran: NPM y Yarn.

### NPM

NPM es un gestor de dependencias fundamental en el ecosistema de Node.js. NPM es el gestor de dependencias por defecto de Node.js, por lo que no es necesario instalarlo. NPM utiliza el archivo package.json para definir las dependencias de nuestro proyecto y almacena las dependencias en la carpeta node_modules. Además facilita la actualización de dependencias usando el comando npm update. NPM es un gestor de dependencias que tiene una gran comunidad que puede servir de ayuda en caso de que surjan problemas.

### Yarn

Yarn es un gestor de dependencias que fue creado por Facebook (Meta) y fue creado para mejorar y resolver deficiencias de NPM. Yarn es un gestor de dependencias externo a Node.js. Yarn tiene un rendimiento más rápido a NPM. También otorga un mecanismo de seguridad a través de validación de checksums. Aun que Yarn tiene una gran comunidad, esta es menor que la de NPM debido a que este último es es más antiguo y es el gestor de dependencias por defecto de Node.js.

## Elección del gestor de dependencias

Para mi proyecto he escogido NPM como gestor de dependencias. Esto se debe a que NPM es el gestor de dependencias por defecto de Node.js, evitando así tener que hacer más instalaciones. Además, tiene una gran comunidad que puede ayudar a resolver problemas.