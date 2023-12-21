# easySelect

## Descripción del problema

Soy el encargado de una empresa para la contratación del personal por lo que 
necesito una forma sencilla y rápida para seleccionar a una o varias personas
para un puesto de trabajo a partir de su curriculum.

## Clase candidato

La clase candidato representa a la entidad principal del proyecto. En esta clase 
se encuentra la lógica de negocio principal del proyecto, siendo la extracción 
de los datos del curriculum.

### Comprobación de la sintaxis

Para comprobar la sintaxis de esta entidad y del resto del código será necesario
ejecular la tarea check puede hacerse de las siguientes formas:

```bash
npm run check
```

### Ejecución de los test

Para ejecutar los test para la extracción de datos de los curriculum se puede
hacer de la siguiente manera:

```bash
npm run test
```

### Contenedor de test

Podemos construir la imagen del contenedor de la siguiente manera:

```bash
docker build -t manuelvico0102/easyselect .
```

Y ejecutamos el contenedor de la siguiente manera:

```bash
docker run  -tv `pwd`:/app/test manuelvico0102/easyselect
```

También podemos usar la imagen que se encuentra en [Docker Hub](https://hub.docker.com/r/manuelvico0102/easyselect)

## Información adicional

[Historias de usuario](./docs/historias_usuario.md)

[Milestones](./docs/milestones.md)

[Demostración objetivo 0](./docs/objetivo0.md)

[Runtime](./docs/runtime.md)

[Gestor de dependencias](./docs/gestor_dependencias.md)

[Gestor de tareas](./docs/gestor_tareas.md)

[Herramientas de Test](./docs/herramientas_test.md)

[Sistemas de integración continua](./docs/CI.md)

[Elección de la biblioteca de logs](./docs/eleccion_logger.md)

[Sistema de configuración](./docs/sistema_configuracion.md)

