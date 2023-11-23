# Imagen base para contenedor.

## Criterios de decisión

Para elegir la imagen base para el contenedor de nuestro proyecto tendremos que tener en cuenta una seria de criterios que serán los siguientes:

- **Optimización de tamaño**: La imagen base debe ser lo más pequeña posible para que el contenedor sea ligero.

- **Compatibilidad**: La imagen base debe tener las herramientas que necesitamos para nuestro proyecto, principalmente node y npm.

- **Actualizado**:  Debe tener soporte actualmente y estar mantenido.

## Opciones

Tenemos diferente opciones de imágenes para mi proyecto, por lo que de las opciones que tenemos vamos a ver las que actualmente estan actualizadas y me parecen más interesantes:


* [node](https://hub.docker.com/_/node): versión oficial de node en docker hub basada en debian, descartada por su tamaño, ya que su versión de latest ocupa 1.1GB instalada.

* [node:alpine](https://hub.docker.com/_/node): variante de la versión oficial de node en docker hub basada en alpine, su tamaño es de 142MB instalada.

* [bitnami/node](https://hub.docker.com/r/bitnami/node): imagen de node basada en debian, su tamaño es de 821MB instalada en su version latest.

* [cimg/node](https://hub.docker.com/r/cimg/node): imagen de node basada en debian, su tamaño es de 1.32GB instalada por lo que se descarta inmediatamente.

## Decisión final

Siguiendo las buenas prácticas elegirémos la imagen ofical de node, pero elegiremos la variante de alpine ya que es la más ligera y cumple con los criterios de decisión.