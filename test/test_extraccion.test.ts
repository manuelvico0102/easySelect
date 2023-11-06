import { Candidato } from "../src/candidato";
import { GestorCandidato } from "../src/gestorCandidato";

describe("Extracción de datos de candidato", () => {
  it("Extracción completa de datos", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/datos.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    expect(candidato.getNombre()).toBe("Alberto");
    expect(candidato.getApellidos()).toBe("Pinas Torrente");
    expect(candidato.getCorreoElectronico()).toBe("albertico@correo.ugr.es");
    expect(candidato.getTelefono()).toBe("999789543");
    expect(candidato.getDisponibilidad()).toBe("alta");
    expect(candidato.getIdiomas()).toEqual({
      "Ingles": "B2",
      "Frances": "B1"
    });
    expect(candidato.getLenguajesDeProgramacion()).toEqual({
      "Python": "avanzado",
      "C++": "intermedio",
      "Java": "principiante"
    });
  });

  it("Extracción de datos incompleta, candidato sin idiomas", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_sin_idiomas.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    expect(candidato.getNombre()).toBe("María");
    expect(candidato.getApellidos()).toBe("Pozas Alarcon");
    expect(candidato.getCorreoElectronico()).toBe("mariaPozas@hotmail.com");
    expect(candidato.getTelefono()).toBe("644959910");
    expect(candidato.getDisponibilidad()).toBe("baja");
    expect(candidato.getIdiomas()).toEqual({});
    expect(candidato.getLenguajesDeProgramacion()).toEqual({
      "Python": "intermedio",
      "C++": "principiante",
      "Ruby": "avanzado",
      "Java": "intermedio"
    });
  });

  it("Extracción de datos incompleta, candidato sin lenguajes de programacion", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_sin_lenguajes.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    expect(candidato.getNombre()).toBe("Carlos");
    expect(candidato.getApellidos()).toBe("Sanchez Perez");
    expect(candidato.getCorreoElectronico()).toBe("carlos_sanchez@gmail.com");
    expect(candidato.getTelefono()).toBe("666777888");
    expect(candidato.getDisponibilidad()).toBe("media");
    expect(candidato.getIdiomas()).toEqual({
      "Ingles": "B1",
      "Frances": "B2",
      "Aleman": "Nativo"
    });
    expect(candidato.getLenguajesDeProgramacion()).toEqual({});
  });

  it("Extracción de datos incompleta, candidato sin informacion", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_sin_informacion.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    expect(candidato.getNombre()).toBe("");
    expect(candidato.getApellidos()).toBe("");
    expect(candidato.getCorreoElectronico()).toBe("");
    expect(candidato.getTelefono()).toBe("");
    expect(candidato.getDisponibilidad()).toBe("");
    expect(candidato.getIdiomas()).toEqual({});
    expect(candidato.getLenguajesDeProgramacion()).toEqual({});
  });

});
