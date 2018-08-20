import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmpleadosService]
})

export class HomeComponent implements OnInit {
  public listadoEmpleados: Array<string>;
  public empleadoNombre: string;
  public fecha: Date;
  constructor(private _empleadosService: EmpleadosService) {
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit() {
      console.log(this._empleadosService.getList());
      this.listadoEmpleados = this._empleadosService.getList();
  }
  delEmpleado(index) {
    this._empleadosService.delEmpleado(index);
  }
  addEmpleado() {
    this._empleadosService.addEmpleado(this.empleadoNombre);
    this.empleadoNombre = null;

  }

}
