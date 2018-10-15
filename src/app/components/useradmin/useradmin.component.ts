import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styles: [`.tHead{
    background-color: #000;
    margin-top: 30px;
    color: #fff;
  }`]
})
export class UseradminComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usrService: UserService) {
    this.usrService.regresaUsuarios()
        .subscribe( data => {
          console.log(data);

          this.usuarios = data;

          this.usuarios = data;
        });
   }

  ngOnInit() {
  }

}
