export class Articulo{

  private _id?: number;
  private _nombre: string;

  private _descripcion: string;

  private _categoria: string [];

  private _precio: number;

  private _stock: number;


  constructor(nombre: string, descripcion: string, categoria: string[], precio: number, stock: number) {
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._categoria = categoria;
    this._precio = precio;
    this._stock = stock;
  }


  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  get categoria(): string[] {
    return this._categoria;
  }

  set categoria(value: string[]) {
    this._categoria = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }
}
