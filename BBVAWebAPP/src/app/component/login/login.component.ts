import { Component, OnInit } from '@angular/core';
import {Servicios} from '../../services/services.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  contraseña: string = "";

  constructor(
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email);
  }

}
