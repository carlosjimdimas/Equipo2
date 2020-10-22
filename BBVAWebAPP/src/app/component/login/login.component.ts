import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router : Router, 
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/movements']);
    console.log(this.email);
  }
 registrar(){
   this.router.navigate(['/register']);
 }

onKey(event) {
    this.email = event.target.value;
  }

}
