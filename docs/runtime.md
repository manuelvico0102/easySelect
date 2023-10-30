# Runtime

Un runtime en pocas palabras y simplificado es un programa que interpreta código fuente y lo ejecuta. Para el desarrollo de nuestro proyecto se ha elegido el lenguaje de programación de TypeScript por lo que se puede optar por diferentes runtimes. Entre los runtimes para TypeScript se pueden encontrar los siguientes:

- [Node.js](https://nodejs.org/en/)
- [SWC](https://swc.rs/)
- [Bun](https://bun.sh/)
- [Deno](https://deno.com/)

## Node.js

Node.js es el runtime más popular para TypeScript. Es un runtime multiplataforma y de código abierto que se ejecuta en diferentes sistemas operativos. Node.js utiliza el motor de JavaScript V8 de Google para ejecutar código JavaScript. Además utiliza el ecosistema de paquete NPM.

- Ventajas:
    - Compatibilidad con gran cantidad de bibliotecas y frameworks debido a su popularidad.
    - Comunidad muy activa, facilitando la busqueda de soluciones a problemas.

- Desventajas:
    - No es un runtime seguro debido a su historia de vulnerabilidades.
    - No es un runtme rápido comparado con otros runtime como Deno o Bun.
    - Es un runtime que necesita un gestor de depenedencias externo como NPM.
    - Es necesario convertir el código TypeScript a JavaScript, también se puede usar ts-node para evitar esto sin embargo ts-node no es compatible con todas las características de TypeScript, además afecta al rendimiento ya que se compila en tiempo de ejecución.

## SWC

SWC es un compilador de TypeScript y JavaScript escrito en Rust. Sin embargo, también puede utilizarse como runtime para TypeScript. SWC es un proyecto de código abierto y multiplataforma. 

- Ventajas:
    - Es un runtime muy rápido comparado con otros runtimes como Node.js.
    - Es un runtime tiene una alta seguridad debido a que está escrito en Rust.

- Desventajas:
    - No es tan popular como Node.js por lo que no tiene una comunidad tan grande.
    - Es un runtime que necesita un gestor de dependencias externo.
    - Igual que ocurría con Node.js, SWC necesita convertir el código TypeScript a JavaScript.
    
## Bun

Bun es un runtime para TypeScript escrito en Rust. Es un proyecto de código abierto y multiplataforma.

- Ventajas:
    - Es un runtime diseñado para ser rápido siendo el más rápido de los runtime descritos.
    - Bun no necesita un gestor de dependencias externo.

- Desventajas:
    - Bun es relativamente nuevo, por lo que no hay tantas bibliotecas o frameworks disponibles con este runtime.
    - Bun tiene una comunidad pequeña.
    - Bun actualmente se encuentra en desarrollo, por lo que no es un runtime estable.

## Deno

Deno es un runtime para TypeScript diseñado para ser seguro. Deno admite TypeScript sin necesidad de transpilarlo a JavaScript. 

- Ventajas:
    - Es un runtime diseñado para ser seguro. Por ejemplo, solo permite carga de módulos de fuentes fiables.
    - Es un runtime moderno construido sobre las últimas versiones de V8 y Rust. Y es un runtime hasta la fecha que esta activamente mantenido.
    - Deno es un runtime diseñado para ser rápido y eficiente, sin embargo no es tan rápido como Bun.
    - Deno no necesita un gestor de dependencias ya que puede importar módulos por URL.
    - Es un runtime que inmediatamente soporta TypeScript sin necesidad de transpilarlo a JavaScript.

- Desventajas:
    - En Deno no hay tantas bibliotecas o frameworks disponibles como en Node.js.

## Elección del runtime

Para mi proyecto he escogido Deno como runtime. Esto se ha debido a que Deno es un runtime moderno, seguro y eficiente. Además, Deno no necesita un gestor de dependencias externo. Aunque hay otros runtimes que también cumplen esto he escogido Done porque es un runtime que inmediatamente soporta TypeScript sin necesidad de transpilarlo a JavaScript, facilitando el desarrollo del proyecto, y así evitar exceso de archivos en el proyecto.




