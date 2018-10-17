import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SysUser } from '../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {

  constructor(private firebaseAuth: AngularFireAuth) {  }

  createAccount(email: string, password: string) {

    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
          console.error(`${ errorCode } Error: ${ errorMessage }.`);
        });

  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
