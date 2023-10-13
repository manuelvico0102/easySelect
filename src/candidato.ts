
  export class Candidato {
    private nombre: string;
    private apellidos: string;
    private correoElectronico: string;
    private telefono: string;
    private disponibilidad: "baja" | "media" | "alta";

    private idiomas: { [idioma: string]: "B1" | "B2" | "C1" | "C2" | "Nativo"};
    private lenguajesDeProgramacion: { [lenguaje: string]: "principiante" | "intermedio" | "avanzado" };

    constructor(
      nombre: string,
      apellidos: string,
      correoElectronico: string,
      telefono: string,
      disponibilidad: "baja" | "media" | "alta",
      idiomas: { [idioma: string]: "B1" | "B2" | "C1" | "C2" | "Nativo" },
      lenguajesDeProgramacion: { [lenguaje: string]: "principiante" | "intermedio" | "avanzado" }
    ) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correoElectronico = correoElectronico;
      this.telefono = telefono;
      this.disponibilidad = disponibilidad;
      this.idiomas = idiomas;
      this.lenguajesDeProgramacion = lenguajesDeProgramacion;
    }

    getNombre(): string {
      return this.nombre;
    }
  
    getApellidos(): string {
      return this.apellidos;
    }
  
    getCorreoElectronico(): string {
      return this.correoElectronico;
    }
  
    getTelefono(): string {
      return this.telefono;
    }

    getDisponibilidad(): "baja" | "media" | "alta" {
      return this.disponibilidad;
    }

    getIdiomas(): { [idioma: string]: "B1" | "B2" | "C1" | "C2" | "Nativo" } {
      return this.idiomas;
    }
  
    getLenguajesDeProgramacion(): { [lenguaje: string]: "principiante" | "intermedio" | "avanzado" } {
      return this.lenguajesDeProgramacion;
    }

  }
