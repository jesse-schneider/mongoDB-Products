import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Products} from './products.js';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) { }

  add(product: Products) {
    return this.http.post<any>('http://localhost:3000/api/add', product);
  }

  getAll() {
    return this.http.get<any>('http://localhost:3000/api/getall');
  }

  getItem(productID) {
    return this.http.post<any>('http://localhost:3000/api/getitem', {'productid': productID});
  }

  update(product: Products) {
    return this.http.post<any>('http://localhost:3000/api/update', product);
  }

  delete(productID) {
    return this.http.post<any>('http://localhost:3000/api/delete', { 'id': productID });
  }


}
