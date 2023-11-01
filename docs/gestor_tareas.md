# Gestor de tareas

Un gestor de tareas es una herramienta que nos permite automatizar tareas repetitivas.

## Criterios de decisión

Para elegir el gestor de tareas para nuestro proyecto tendremos que tener en cuenta una seria de criterios que seran los siguientes:

- **Simplicidad**: La herramienta debe ser fácil de usar y de entender.

- **Rendimiento**: La herramienta debe ser rápida y eficiente.

- **Comunidad:** El gestor de dependencias debe tener una comunidad que pueda ayudar a resolver problemas.


## Gestores de tareas

Existen diferentes gestores de tareas que podemos utilizar, entre los que se encuentran: Make, Gulp, Broccoli y NPM scripts entre otros muchos.

### Make

Make es un task runner simple y eficaz utilizado por muchos desarrolladores. Make utiliza un archivo llamado Makefile para definir las tareas que se deben automatizar. Make es un task runner rápido y eficiente, además es una opción para proyectos de todos los tamaños. Uno de sus principales puntos es que es fiable en el sentido de que a pesar de que pase tiempo y se actualicen las herramientas, Make seguirá funcionando.

### Gulp

Gulp es un task runner que funciona mediante la creación de un archivo gulpfile.js que especifica las tareas a automatizar. Gulp es flexible y extensible ya que tiene soporte para una gran variedad de plugins. Gulp utiliza un flujo de trabajo basado en tuberías, esto significan que las tareas se pueden conectar entre sí para crear flujos de trabajo complejos. Aunque Gulp no tiene una comunidad pequeña, esta es menor que la de otros gestores de tareas de los que estamos comentando.

### Broccoli

Broccoli es un task runner basado en flujos de trabajo similar a Gulp. Broccoli viene con soporte integrado para Typescript. Este task runner funciona mediante la creación de un árbol de tareas que se ejecuta en orden. Broccoli es eficiente y puede ejecutar tareas rápidamente, además es seguro y evita la ejecución de código malicioso. Sin embargo, este gestor de tareas no tiene una gran comunidad y no es tan popular como otros gestores de tareas.


### NPM scripts
NPM scripts es un task runner que viene integrado en NPM. Este task runner utiliza el archivo package.json para definir y ejecutar scripts. NPM scripts es un task runner simple y versátil, ya que puede realizar tareas básicas y algunas más complejas. Además, NPM scripts es fácil de configurar y no requiere instalar herramientas adicionales.

## Elección del gestor de tareas

Para mi proyecto he escogido NPM scripts como gestor de tareas. Esto se debe a que NPM scripts tiene una amplia gama de funcionalidades y es un gestor de tareas simple. Además, NPM scripts es un gestor de tareas que viene integrado en NPM, por lo que no es necesario instalar herramientas adicionales y por ello tiene una amplia comunidad.