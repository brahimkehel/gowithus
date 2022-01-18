export class Passager {
  private id?: number;
  private cin?: string;
  private nom?: string;
  private prenom?: string;
  private username?: string;
  private email?: string;
  private tel?: number;
  private password!: string;

  set _id(value: number) {
    this.id = value;
  }

  set _cin(value: string) {
    this.cin = value;
  }

  set _nom(value: string) {
    this.nom = value;
  }

  set _prenom(value: string) {
    this.prenom = value;
  }

  set _username(value: string) {
    this.username = value;
  }

  set _email(value: string) {
    this.email = value;
  }

  set _tel(value: number) {
    this.tel = value;
  }

  get _id(): number {
    return this.id ?? 0;
  }

  get _cin(): string {
    return this.cin ?? "";
  }

  get _nom(): string {
    return this.nom ?? "";
  }

  get _prenom(): string {
    return this.prenom ?? "";
  }

  get _username(): string {
    return this.username ?? "";
  }

  get _email(): string {
    return this.email ?? "";
  }

  get _tel(): number {
    return this.tel ?? 0;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }
}
