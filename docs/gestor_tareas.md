# Gestor de tareas

Un gestor de tareas es una herramienta que nos permite automatizar tareas repetitivas. Existen diferentes gestores de tareas que podemos utilizar, entre los que se encuentran: Make, Gulp, Broccoli y Deno Task entre otros muchos.

## Make

Make es un task runner simple y eficaz utilizado por muchos desarrolladores. Make utiliza un archivo llamado Makefile para definir las tareas que se deben automatizar. Make es un task runner rápido y eficiente, además es una opción para proyectos de todos los tamaños. Uno de sus principales puntos es que es fiable en el sentido de que a pesar de que pase tiempo y se actualicen las herramientas, Make seguirá funcionando.


## Gulp

Gulp es un task runner que funciona mediante la creación de un archivo gulpfile.js que especifica las tareas a automatizar. Gulp es flexible y extensible ya que tiene soporte para una gran variedad de plugins. Gulp utiliza un flujo de trabajo basado en tuberías, esto significan que las tareas se pueden conectar entre sí para crear flujos de trabajo complejos.

## Broccoli

Broccoli es un task runner basado en flujos de trabajo similar a Gulp. Broccoli viene con soporte integrado para Typescript. Este task runner funciona mediante la creación de un árbol de tareas que se ejecuta en orden. Broccoli es eficiente y puede ejecutar tareas rápidamente, además es seguro y evita la ejecución de código malicioso.

## Deno Task

Por último, tenemos Deno Task un task runner para Deno. Este task runner es relativamente nuevo por lo que esta activamente mantenido. Es un gestor de tareas simple y eficiente. Uno de los puntos fuertes de Deno Task es que utiliza declaraciones de uso directamente en el código, por lo que no es necesario crear un archivo de configuración.

## Elección del gestor de tareas

Para mi proyecto he escogido Deno Task como gestor de tareas. Esto se debe en parte por la simplicidad ya que también usaremos el runtime Deno, pero también es debido a su continuo mantenimiento y popularidad creciente.
