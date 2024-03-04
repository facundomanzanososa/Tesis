export class SKU {
    id ? : number;
    SKU: number;
    RFID: number;
    HoraCreacion: string;


    constructor(SKU: number, RFID: number, HoraCreacion: string) {

      this.SKU = SKU;
      this.RFID = RFID;
      this.HoraCreacion = HoraCreacion;
    }
  }
