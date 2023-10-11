
  export class Usuario {
    private nombre: string;
    private apellidos: string;
    private correoElectronico: string;
    private telefono: string;

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
    
  }
