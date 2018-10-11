import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styles: []
})
export class UserinfoComponent implements OnInit {

  user: any = {}

  constructor() { }

  ngOnInit() {
  }

}
