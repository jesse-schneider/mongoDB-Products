import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../services/products.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Products[] = [];

  constructor(private productData: ProductdataService, private router: Router) { }

  ngOnInit() {
    this.productData.getAll().subscribe((data) => {
      this.products = data;
    })
  }

  removeProduct(id) {
    if(confirm("Do you really want to delete this item?")) {
      this.productData.delete(id).subscribe((data) => {
        this.products = data;
      });
    }
  }

}
