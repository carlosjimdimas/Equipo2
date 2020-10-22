import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  backendUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  // getUserMovements() {
  //   const url = `${this.backendUrl}/Movimientos/${userEmail}`;
  //   return this.httpClient.get(url);
  // }


  // postNewRegister(productId: string) {
  //   const url = `${this.backendUrl}/product/${productId}`;
  //   return this.httpClient.get(url);
  // }

  // searchProducts(expression: string) {
  //   const url = `${this.backendUrl}/product/${expression}`;
  //   return this.httpClient.geturl);
  // }
}