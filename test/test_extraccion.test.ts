import { Candidato } from "../src/candidato";
import { GestorCandidato } from "../src/gestorCandidato";

describe("Extracción de datos de candidato", () => {
  it("Extracción completa de datos", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_completo.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    const candidatoEsperado = new Candidato(
      'Manuel',
      'Vico Arboledas',
      'manuel.vico123456@gmail.com',
      '644111000',
      {
        'Español': 'Nativo',
        'Inglés': 'B2',
        'Francés': 'B1',
      },
      {
        'Python': 'avanzado',
        'C++': 'intermedio',
        'Java': 'principiante',
      },
    );
    expect(candidato).toEqual(candidatoEsperado)
  });
  
  it("Extracción de datos incompleta, candidato sin idiomas", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_sin_idiomas.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    const candidatoEsperado = new Candidato(
      'María',
      'Gamez Luque',
      'marialuque12@hotmail.es',
      '953123456',
      {},
      {
        'Python': 'avanzado',
        'Ruby': 'principiante',
        'C++': 'avanzado',
        'JavaScript': 'intermedio',
      },
    );
    expect(candidato).toEqual(candidatoEsperado)
  });

  it("Extracción de datos incompleta, candidato sin lenguajes de programacion", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_sin_lenguajes.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    const candidatoEsperado = new Candidato(
      'Carlos',
      'Sanchez García',
      'carlos_garcia@correo.ugr.es',
      '666777888',
      {
        'Inglés': 'Nativo',
        'Español': 'C1',
        'Francés': 'B1',
        'Alemán': 'B2'
      },
      {},
    );
    expect(candidato).toEqual(candidatoEsperado)
  });

  it("Extracción de datos incompleta, candidato sin informacion", () => {
    // Creación de un objeto GestorCandidato
    const gestorCandidato = new GestorCandidato("data/candidato_vacio.txt");

    // Extracción de los datos del archivo
    const candidato = gestorCandidato.extraerCandidato();

    // Verificación de los datos
    const candidatoEsperado = new Candidato(
      '',
      '',
      '',
      '',
      {},
      {},
    );
    expect(candidato).toEqual(candidatoEsperado)
  });
  
});
