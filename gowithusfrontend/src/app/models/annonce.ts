import {Conducteur} from "./conducteur";

export class Annonce {
  private _id?: number;
  private _depart?: string;
  private _arrive?: string;
  private _prix?: number;
  private _conducteur?: Conducteur = new Conducteur();


  set id(value: number) {
    this._id = value;
  }

  set depart(value: string) {
    this._depart = value;
  }

  set arrive(value: string) {
    this._arrive = value;
  }

  set prix(value: number) {
    this._prix = value;
  }

  set conducteur(value: Conducteur) {
    this._conducteur = value;
  }

  get id(): number {
    return this._id ?? 0;
  }

  get depart(): string {
    return this._depart ?? "";
  }

  get arrive(): string {
    return this._arrive ?? "";
  }

  get prix(): number {
    return this._prix ?? 0;
  }

  get conducteur(): Conducteur {
    return this._conducteur ?? new Conducteur();
  }
}
