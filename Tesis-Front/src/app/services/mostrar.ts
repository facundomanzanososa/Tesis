export class Mostrar {
    id ? : number;
    SKU: number;
    RFID: number;
    Zona: number;
    HoraCreacion: string;
    HoraMov: string;
    Marca: string;
    Talle: number;
    Sexo: number;


    constructor(SKU: number, RFID: number, Zona: number, HoraCreacion: string, HoraMov: string, Marca: string, Talle: number, Sexo: number) {

      this.SKU = SKU;
      this.RFID = RFID;
      this.Zona = Zona;
      this.HoraCreacion = HoraCreacion;
      this.HoraMov = HoraMov;
      this.Marca = Marca;
      this.Talle = Talle;
      this.Sexo = Sexo;
    }
  }
