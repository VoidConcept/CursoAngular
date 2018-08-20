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
  constructor(private _empleadosService: EmpleadosService) {}

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
