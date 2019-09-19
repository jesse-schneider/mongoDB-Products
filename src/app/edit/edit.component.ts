import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../services/products.js';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  name:string = "";
  description:string = "";
  price:number = null;
  units:number = null;
  productid:number = null;
  updatedProd:Products;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductdataService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    this.productService.getItem(this.id).subscribe((data) => {
      this.name = data.name;
      this.price = data.price;
      this.units = data.units;
      this.description = data.description;
      this.productid = data.id;
    });
  }

  editProduct(event) {
    event.preventDefault();
      this.updatedProd = new Products(this.id, this.name, this.description, this.price, this.units);
      this.productService.update(this.updatedProd).subscribe((data) => {
        this.router.navigateByUrl('list');
      })
    }

}
