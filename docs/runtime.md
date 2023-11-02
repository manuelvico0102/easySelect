# Runtime

## Criterios de decisión

Para elegir las diferentes herramientas para nuestro proyecto tendremos que tener en cuenta una seria de criterios que seran los siguientes:

- **Simplicidad**: La herramienta debe ser fácil de usar y de entender. Y se tendrá en cuenta su comunidad para el caso de tener que resolver problemas.

- **Soporte TypeScript**: La herramienta debe ser compatible con el lenguaje de programación que estamos utilizando en nuestro caso TypeScript.

- **Estabilidad**: La herramienta debe ser estable y no tener fallos.

## Runtimes

Un runtime en pocas palabras y simplificado es un programa que interpreta código fuente y lo ejecuta. Para el desarrollo de nuestro proyecto se ha elegido el lenguaje de programación de TypeScript por lo que se puede optar por diferentes runtimes. Entre los runtimes para TypeScript se pueden encontrar los siguientes:

- [Node.js](https://nodejs.org/en/)
- [Bun](https://bun.sh/)
- [Deno](https://deno.com/)

### Node.js

Node.js es el runtime más popular para TypeScript. Es un runtime multiplataforma y de código abierto que se ejecuta en diferentes sistemas operativos. Node.js utiliza el motor de JavaScript V8 de Google para ejecutar código JavaScript. Además utiliza el ecosistema de paquete NPM.

- Ventajas:
    - Tiene soporte para TypeScript y una gran comunidad para ayudar a resolver problemas.
    - Node al ser un runtime desarrollado en 2009 es maduro y estable.

- Desventajas:
    - Dependencias: Node.js necesita un gestor de dependencias externo como NPM o Yarn.

### Bun

Bun es un runtime, que puede usarse para TypeScript y otros, escrito en Rust.

- Ventajas:
    - Tiene soporte para TypeScript.
    - Bun no necesita un gestor de dependencias externo, ya que tiene uno integrado llamado Bunx.

- Desventajas:
    - Bun es relativamente nuevo, por lo que no tiene una comunidad tan extensa como Node.js.
    - Bun es un runtime relativamente nuevo, por lo que puede tener fallos.

### Deno

Deno es un runtime, para TypeScript, JavaScript, Go y otros más, diseñado para ser seguro.

- Ventajas:
    - Deno no necesita un gestor de dependencias ya que puede importar módulos por URL.
    - Es un runtime que inmediatamente soporta TypeScript sin necesidad de transpilarlo a JavaScript.

- Desventajas:
    - Deno no es un runtime tan popular como Node.js, por lo que no tiene una comunidad tan grande como Node.js.
    - Deno es un runtime moderno, aunque no es tan maduro como Node.js.

## Elección del runtime

Para mi proyecto he escogido Node.js como runtime. Esto se ha debido a que Node.js es un runtime estable. Además tiene una gran comunidad que puede ayudar a resolver problemas.




