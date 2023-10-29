export type Disponibilidad = "baja" | "media" | "alta";

export type NivelIdioma = "B1" | "B2" | "C1" | "C2" | "Nativo";

export type NivelLenguajeProgramacion = "principiante" | "intermedio" | "avanzado";

export type Idiomas = { [idioma: string]: NivelIdioma };

export type LenguajesDeProgramacion = { [lenguaje: string]: NivelLenguajeProgramacion };
