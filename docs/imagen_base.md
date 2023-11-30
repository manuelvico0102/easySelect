# Imagen base para contenedor.

## Criterios de decisión

Para elegir la imagen base para el contenedor de nuestro proyecto tendremos que tener en cuenta una seria de criterios que serán los siguientes:

- **Optimización de tamaño**: La imagen base debe ser lo más pequeña posible para que el contenedor sea ligero.

- **Compatibilidad**: La imagen base debe tener las herramientas que necesitamos para nuestro proyecto, principalmente node y npm.

- **Actualizado**:  Debe tener soporte actualmente y estar mantenido.

## Opciones

Tenemos diferente opciones de imágenes para mi proyecto, por lo que de las opciones que tenemos vamos a ver las que actualmente estan actualizadas y me parecen más interesantes:


* [node](https://hub.docker.com/_/node): versión oficial de node en docker hub basada en debian, descartada por su tamaño, ya que su versión de latest ocupa 1.1GB instalada. Última actualización 23-nov. 

* [node:alpine](https://github.com/nodejs/docker-node/blob/ed83529ea65cfbeadda161ee501b4cf83444aa2d/21/alpine3.18/Dockerfile): variante de la versión oficial de node en docker hub basada en alpine, su tamaño es de 142MB instalada. Última actualización 23-nov.

* [bitnami/node](https://hub.docker.com/r/bitnami/node): imagen de node basada en debian, su tamaño es de 821MB instalada en su version latest. 23-nov.

* [cimg/node](https://hub.docker.com/r/cimg/node): imagen de node basada en debian, su tamaño es de 1.32GB instalada por lo que se descarta inmediatamente. Última actualización 22-nov.

## Decisión final

Siguiendo las buenas prácticas elegirémos la imagen ofical de node, pero elegiremos la variante de alpine ya que es la más ligera y cumple con los criterios de decisión.