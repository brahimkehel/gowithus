import {Conducteur} from "./conducteur";

export class Annonce {
  private _id?: number;
  private _depart?: string;
  private _arrive?: string;
  private _prix?: number;
  private _date?:Date;
  private _heureDepart?:string;
  private _conducteur?: Conducteur = new Conducteur();


  get id(): number {
    return this._id??0;
  }

  set id(value: number) {
    this._id = value;
  }

  get depart(): string {
    return this._depart??"";
  }

  set depart(value: string) {
    this._depart = value;
  }

  get arrive(): string {
    return this._arrive??"";
  }

  set arrive(value: string) {
    this._arrive = value;
  }

  get prix(): number {
    return this._prix??0;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get date(): Date {
    return this._date??new Date();
  }

  set date(value: Date) {
    this._date = value;
  }

  get heureDepart(): string {
    return this._heureDepart??"";
  }

  set heureDepart(value: string) {
    this._heureDepart = value;
  }

  get conducteur(): Conducteur {
    return this._conducteur??new Conducteur();
  }

  set conducteur(value: Conducteur) {
    this._conducteur = value;
  }
}
