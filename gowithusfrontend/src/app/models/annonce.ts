import {Conducteur} from "./conducteur";

export class Annonce {
  private id?: number;
  private depart?: string;
  private arrive?: string;
  private prix?: number;
  private date?:Date;
  private heureDepart?:string;
  private conducteur?: Conducteur = new Conducteur();

  constructor(id?: number, depart?: string, arrive?: string, prix?: number,date?:Date,heureDepart?:string,conducteur?: Conducteur) {
    this.id = id;
    this.depart = depart;
    this.arrive = arrive;
    this.prix = prix;
    this.date=date;
    this.heureDepart=heureDepart;
    this.conducteur = conducteur;
  }

  get _date(): Date {
    return this.date??new Date();
  }

  set _date(value: Date) {
    this.date = value;
  }

  get _heureDepart(): string {
    return this.heureDepart??"";
  }

  set _heureDepart(value: string) {
    this.heureDepart = value;
  }

  set _id(value: number) {
    this.id = value;
  }

  set _depart(value: string) {
    this.depart = value;
  }

  set _arrive(value: string) {
    this.arrive = value;
  }

  set _prix(value: number) {
    this.prix = value;
  }

  set _conducteur(value: Conducteur) {
    this.conducteur = value;
  }

  get _id(): number {
    return this.id ?? 0;
  }

  get _depart(): string {
    return this.depart ?? "";
  }

  get _arrive(): string {
    return this.arrive ?? "";
  }

  get _prix(): number {
    return this.prix ?? 0;
  }

  get _conducteur(): Conducteur {
    return this.conducteur ?? new Conducteur();
  }
}
