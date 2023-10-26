
class GestorCandidato {
    archivo: string;
    datos: { [clave: string]: (archivo: string) => string } = {};

    constructor(filePath: string) {
        this.archivo = filePath;
    }
}

