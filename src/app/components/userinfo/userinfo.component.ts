import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styles: []
})
export class UserinfoComponent implements OnInit {

  user: User = {
    username: '',
    aplication: 0
  };

  nuevo = false;
  id: string;

  constructor(private _userServices: UserService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id);
      if (this.id === undefined) {
        this.nuevo = true;
      } else {
        this._userServices.regresaUsuario( this.id)
            .subscribe( usr => this.user = usr );
      }

    });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.user);

    if (this.nuevo) {
      // Insertando
      this._userServices.nuevoUsuario( this.user )
        .subscribe( data => {
          this.router.navigate(['/user', data.name]);
        },
          error => console.log(error));
    } else {
      // Actualizando
      this._userServices.editaUsuario ( this.user, this.id )
        .subscribe( data => {
          console.log(data);
        },
          error => console.log(error));
    }

  }

  agregaNuevo(_forma: NgForm) {
    this.router.navigate(['/user']);
    _forma.reset();
  }
}
