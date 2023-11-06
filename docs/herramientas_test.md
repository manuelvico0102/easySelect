# Herramientas de test

## Criterios de decisión

Para elegir las diferentes herramientas para nuestro proyecto tendremos que tener en cuenta una seria de criterios que seran los siguientes:

- **Simplicidad**: La herramienta debe ser fácil de usar y de entender.

- **Compatibilidad**: La herramienta debe ser compatible con el lenguaje de programación que estamos utilizando en nuestro caso TypeScript.

- **Comunidad**: La herramienta debe tener una comunidad que pueda ayudar a resolver problemas.

- **Híbrido**: Se tendrá en cuenta que la herramienta tenga biblioteca para aserciones así como el test runner.


## Herramientas de test

Necesitamos elegir herramientas de test para nuestro proyecto. Para ello será necesario elegir un una biblioteca de aserciones, un test runner y un CLI para ejecutar los test.

### Aserciones

- [Chai](https://www.chaijs.com/): Chai es una biblioteca de aserciones para Node.js y el navegador. Chai tiene una sintaxis legible y es fácil de usar.

- [Jest](https://jestjs.io/): Jest es realmente un framework, sin embargo viene incluido con una biblioteca de aserciones siendo esta jest-snapshot.

- [Should.js](https://shouldjs.github.io/): Should.js es una biblioteca de aserciones para Node.js y el navegador. Should.js tiene una sintaxis limpia y fácil de usar. Sin embargo no tienen una comunidad tan grande como otras bibliotecas de aserciones.

### Test runners o frameworks

- [Jest](https://jestjs.io/): Jest es un test runner para JavaScript y TypeScript, entre otros. Como se ha mencionado anteriormente Jest viene con una biblioteca de aserciones por lo que no es necesario la instalación de una. Es compatible con TypeScript y tiene una gran comunidad.

- [Mocha](https://mochajs.org/): Mocha es un test runner para Node.js, compatible con TypeScript. Además, Mocha es un framework flexible y extensible. Sin embargo, es necesario instalar una biblioteca de aserciones para poder utilizar Mocha, normalmente se utiliza Chai. Por último, Mocha tiene una gran comunidad, pero no es tan amplia como la de Jest.

- [AVA](https://github.com/avajs/ava): AVA es un test runner con soporte para TypeScript. Además cuenta con una biblioteca de aserciones integrada, sin embargo es una biblioteca simple. Sin embargo, tiene una pequeña comunidad comparada con Jest y Mocha.


### CLI

Para ejecutar los test necesitamos un CLI, sin embargo los test runners mencionados anteriormente tienen un CLI integrado. Por lo que no es necesario instalar un CLI externo. Por lo que el test runner que sea elegido será el CLI que se utilizará.

## Elección de las herramientas de test

Finalmente, para mi proyecto he escogido Jest como test runner. Esto se debe a que Jest es un test runner que viene con una biblioteca de aserciones, por lo que no es necesario instalar una biblioteca de aserciones externa. Además, Jest es compatible con TypeScript y tiene una gran comunidad que puede ayudar a resolver problemas.


