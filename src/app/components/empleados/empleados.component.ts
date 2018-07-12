import { Component, OnInit } from '@angular/core';
import Module = NodeJS.Module;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {

  public title:String  = null;
  public nombre:String = null;
  public edad:Number = null;
  public esVaron:Boolean = true;
  public capacidades:Array<any> = null; //any es un tipo de dato especial que permite cualquier tipo de dato
  comodin:any = null;

  constructor() {
    this.title = 'EmpleadosComponent';

    console.log(this.capacidades);
  }

  ngOnInit() {
  }

}
