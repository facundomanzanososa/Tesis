export class Agregar {
    SKU: number;
    RFID: number;
    Zona: number;
    Marca: string;
    Talle: number;
    Sexo: number;


    constructor(SKU: number, RFID: number, Zona: number, Marca: string, Talle: number, Sexo: number) {
      this.SKU = SKU;
      this.RFID = RFID;
      this.Zona = Zona;
      this.Marca = Marca;
      this.Talle = Talle;
      this.Sexo = Sexo;
    }
  }
