import { Injectable } from '@angular/core';
import {  Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'Hola Mundo desde el service test';
  }
  getArticulos() {
      return this._http.get(this.url);
  }



}