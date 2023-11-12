# Herramientas de test

## Criterios de decisión

Para elegir las diferentes herramientas para nuestro proyecto tendremos que tener en cuenta una seria de criterios que seran los siguientes:

- **Compatibilidad**: La herramienta debe ser compatible con el lenguaje de programación que estamos utilizando en nuestro caso TypeScript.

- **Valoración**: Se tendrá en cuenta la valoración que tiene la herramienta en [Snyk Advisor](https://snyk.io/advisor)

- **Híbrido**: Se tendrá en cuenta que la herramienta tenga biblioteca para aserciones así como el test runner.


## Herramientas de test

Necesitamos elegir herramientas de test para nuestro proyecto. Para ello será necesario elegir un una biblioteca de aserciones, un test runner y un CLI para ejecutar los test.

### Aserciones

- [Chai](https://www.chaijs.com/): Chai es una biblioteca de aserciones para Node.js. Tiene una valoración de 97.

- [Should.js](https://shouldjs.github.io/): Should.js es una biblioteca de aserciones para Node.js. Tiene una valoración de 61.

### Test runners o frameworks

- [Jest](https://jestjs.io/): Jest es un testing framework para JavaScript y TypeScript, entre otros. Jest viene con una biblioteca de aserciones por lo que no es necesario la instalación de una. Su valoración es de 92.

- [Mocha](https://mochajs.org/): Mocha es un test runner para Node.js, compatible con TypeScript. Además, Mocha es un framework flexible y extensible. Sin embargo, es necesario instalar una biblioteca de aserciones para poder utilizar Mocha, normalmente se utiliza Chai. Su puntuación es de 87.

- [AVA](https://github.com/avajs/ava): AVA es un test runner con soporte para TypeScript. Además cuenta con una biblioteca de aserciones integrada, sin embargo es una biblioteca simple. Su valoración es de 94.


### CLI

Para ejecutar los test necesitamos un CLI, sin embargo los test runners mencionados anteriormente tienen un CLI integrado. Por lo que no es necesario instalar un CLI externo. Por lo que el test runner que sea elegido será el CLI que se utilizará.

## Elección de las herramientas de test

Finalmente, para mi proyecto he escogido Jest como test runner. Esto se debe a que Jest es un framework que viene con una biblioteca de aserciones, por lo que no es necesario instalar una biblioteca de aserciones externa. Además, Jest es compatible con TypeScript y tiene una valoración alta en Snyk Advisor.

