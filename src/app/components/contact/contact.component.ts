import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title = 'Página de contacto';
  public parametro = null;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }
  redirigir() {
    this._router.navigate(['/contact', 'From redirección']);
  }
}
