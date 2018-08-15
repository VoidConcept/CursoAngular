import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;

  constructor() {
      this.empleado = new Empleado('Carlos Otero Seijo', 35, 'Cherif', true);
  }

  ngOnInit() {
    this.getTrabajadores();
  }

  getTrabajadores() {
    this.trabajadores = [
        new Empleado('Carlos Otero Seijo', 35, 'SuperStar', true),
        new Empleado('Alex Ponte Ortiz', 42, 'Cherif', true),
        new Empleado('Quique Otero Seijo', 41, 'Cherif *', true)
    ];
  }
}
