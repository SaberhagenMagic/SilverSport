import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SysUser } from '../../../interfaces/user.interface';
// Services
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usr: SysUser = {
    email: '',
    pwd: ''
  };
  cpwd = '';

  constructor(private srvFire: AuthenticationService) { }

  ngOnInit() {
  }

  Registrar() {
    this.srvFire.createAccount(this.usr.email, this.usr.pwd);
  }

}
