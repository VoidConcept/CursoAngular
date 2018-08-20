import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public listado = [];
  constructor() { }
  addEmpleado(nombre: string) {
    this.listado.push(nombre);
    return this.getList();
  }
  delEmpleado(index: number) {
    this.listado.splice(index, 1);
    return this.getList();
  }
  getList(): Array<string> {
    return this.listado;
  }
}
