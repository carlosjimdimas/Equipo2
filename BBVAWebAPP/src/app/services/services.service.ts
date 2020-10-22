import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  backendUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getUserMovements(userEmail: string) {
    const url = `${this.backendUrl}/Movimientos/${userEmail}`;
    return this.httpClient.get(url);
  }


  postNewRegister(newUser) {
    const url = `${this.backendUrl}/Registro/`;
    return this.httpClient.post(url, newUser );
  }

  postLogin(userData) {
    const url = `${this.backendUrl}/Login`;
    return this.httpClient.post(url, userData);
  }
}