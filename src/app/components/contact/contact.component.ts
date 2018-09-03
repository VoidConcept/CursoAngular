import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    providers: [PeticionesService]

})
export class ContactComponent implements OnInit {
  public title = 'Página de contacto';
  public parametro = null;
  public posts;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private  _peticionesService: PeticionesService
  ) {  }
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
    this._peticionesService.getArticulos().subscribe(
        result => {
          this.posts = result;
          console.log(result);
        },
        error => {

          console.log(error);
        }
    );
  }
  redirigir() {
    this._router.navigate(['/contact', 'From redirección']);
  }
}
