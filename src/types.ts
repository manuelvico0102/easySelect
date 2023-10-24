type Disponibilidad = "baja" | "media" | "alta";

type NivelIdioma = "B1" | "B2" | "C1" | "C2" | "Nativo";

type NivelLenguajeProgramacion = "principiante" | "intermedio" | "avanzado";

type Idiomas = { [idioma: string]: NivelIdioma };

type LenguajesDeProgramacion = { [lenguaje: string]: NivelLenguajeProgramacion };
