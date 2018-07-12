import { Component, OnInit } from '@angular/core';


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
    //Variables y alcance
      var uno = 1;
      var dos = 2;

      if (uno == 1) {
        let uno = 3;
        console.log('Dentro del IF: '+uno);
      }
      
      console.log ('Fuera del IF: '+uno)
  }

}
