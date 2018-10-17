import { Component, OnInit } from '@angular/core';
import { SysUser } from '../../interfaces/user.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usr: SysUser = { email: '', pwd: '' };

  constructor(private srvfire: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.srvfire.login(this.usr.email, this.usr.pwd);
  }

  logout() {
    console.log('Salir');
    this.srvfire.logout();
  }

}
