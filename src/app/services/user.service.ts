import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
// import {  } from 'firebase';

@Injectable()
export class UserService {

  fireUsersUrl = 'https://autentificationusermx.firebaseio.com/users.json';
  fireUserUrl = 'https://autentificationusermx.firebaseio.com/users/';

  constructor( private http: Http) { }

  nuevoUsuario (user: User) {
    const body = JSON.stringify( user );
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post( this.fireUsersUrl, body, { headers: headers } ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          }));
  }

  editaUsuario (user: User, key$: string) {
    const body = JSON.stringify( user );
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });

    const url = `${ this.fireUserUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers: headers } ).pipe(
          map( res => {
            console.log(res.json());
            return res.json();
          }));
  }

  borraUsuario (key$: string) {

    const url = `${ this.fireUserUrl }/${ key$ }.json`;

    return this.http.delete( url ).pipe(
          map( res => {
            return res.json();
          }));
  }

  regresaUsuario (key$: string) {
    const url = `${ this.fireUserUrl }/${ key$ }.json`;
    return this.http.get(url).pipe(
      map( res => res.json() )
    );
  }

  regresaUsuarios () {
    return this.http.get( this.fireUsersUrl ).pipe(
      map( res => res.json() )
    );
  }
}
