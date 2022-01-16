export class Conducteur {
  private _id?: number;
  private _cin?:string;
  private _nom?:string;
  private _prenom?:string;
  private _username?:string;
  private _email?:string;
  private _tel?:number;
  private _marque?:string;
  private _nb_places?:number;

  set id(value: number) {
    this._id = value;
  }

  set cin(value: string) {
    this._cin = value;
  }

  set nom(value: string) {
    this._nom = value;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  set username(value: string) {
    this._username = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set tel(value: number) {
    this._tel = value;
  }

  set marque(value: string) {
    this._marque = value;
  }

  set nb_places(value: number) {
    this._nb_places = value;
  }

  get id(): number {
    return this._id??0;
  }

  get cin(): string {
    return this._cin?"";
  }

  get nom(): string {
    return this._nom?"";
  }

  get prenom(): string {
    return this._prenom?"";
  }

  get username(): string {
    return this._username?"";
  }

  get email(): string {
    return this._email?"";
  }

  get tel(): number {
    return this._tel??0;
  }

  get marque(): string {
    return this._marque??"";
  }

  get nb_places(): number {
    return this._nb_places??0;
  }
}
