# Sistemas de integración continua

## Criterios de decisión

Para elegir el CI tendrémos en cuenta los siguientes criterios:

**Gratis** : El CI debe ser gratuito para el proyecto.

**Compatibilidad con GitHub** : Se tendrá en cuenta que el CI sea compatible con GitHub.

**Compatibilidad con Docker** : Se tendrá en cuenta que el CI sea compatible con Docker.

## Sistemas de CI

Tenemos diferentes opciones de CI para nuestro proyecto, por lo que de las opciones que tenemos vamos a ver las que actualmente estan actualizadas y me parecen más interesantes:

* [GitHub Actions](https://docs.github.com/es/actions): es un sistema de CI gratuito, la configuración se realiza mediante ficheros YAML. GitHub Actions permite ejecutar flujos de trabajo en contenedores Docker.

* [Buddy](https://buddy.works/): es un sistema de CI/CD que permite la ejecución de pipelines en contenedores Docker. Además, es compatible con GitHub. Sin embargo no es gratuito teniendo varios planes de suscripción. Pero tiene un plan gratuito con varias restricciones por ello no es una buena opción.

* [Travis CI](https://travis-ci.com/): es un sistema CI gratuito, compatible con GitHub y Docker. Para usarlo hay que incluir un archivo de configuración .travis.yml

* [Circle CI](https://circleci.com/): es un servicio de integración continua que ayuda a automatizar los procesos de construcción y prueba. Ofrece tanto un plan gratuito como uno de suscripción. Permite la ejecución en contenedores Docker y también tiene integración con GitHub.

* [Jenkins](https://www.jenkins.io/): es compatible con Github. Además nos permite un entorno de ejecucción de imagenes docker. Es gratuito y de código abierto.

## Elección

De las opciones mencionadas, se ha descartado CircleCi para evitar la opción más básica, Buddy por no ser gratuito y Jenkins por problemas de configuración. Por lo que se ha elegido Travis CI y GitHub Actions.

## Justificación de versiones

En GitHub Actions se van a probar las versiones de Node 14, 16 y 18 ya que estas son versiones LTS de Node. En travis CI se descarga la última versión de la imagen base por lo que se probará la que tiene, siendo esta la versión de desarrollo (21) de Node.


