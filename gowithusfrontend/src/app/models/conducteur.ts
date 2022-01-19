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
  private _password!:string;


  get id(): number {
    return this._id??0;
  }

  set id(value: number) {
    this._id = value;
  }

  get cin(): string {
    return this._cin??"";
  }

  set cin(value: string) {
    this._cin = value;
  }

  get nom(): string {
    return this._nom??"";
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom??"";
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get username(): string {
    return this._username??"";
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email??"";
  }

  set email(value: string) {
    this._email = value;
  }

  get tel(): number {
    return this._tel??0;
  }

  set tel(value: number) {
    this._tel = value;
  }

  get marque(): string {
    return this._marque??"";
  }

  set marque(value: string) {
    this._marque = value;
  }

  get nb_places(): number {
    return this._nb_places??0;
  }

  set nb_places(value: number) {
    this._nb_places = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
