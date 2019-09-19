import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../services/products.js';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations: [
    trigger('idErrorState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
  ]
})
export class AddComponent implements OnInit {
  name:string = "";
  description:string = "";
  price:number = null;
  units:number = null;
  productid:number = null;
  newProd:Products;
  newProductMessage= "";
  iderrormsg:string = "This ID already exists, please try new ID";
  iderrormsg2: string = "";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;

  constructor(private productData: ProductdataService) { }

  ngOnInit() {
  }

  get stateName() {
    return this.iderrorshow ? 'show' : 'hide';
  }

  get noticeName() {
    return this.noticeshow ? 'show' : 'hide';
  }

  addProduct(event) {
    event.preventDefault();
    if(this.productid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
      this.newProd = new Products("", this.productid, this.description, this.price, this.units);
      this.productData.add(this.newProd).subscribe((data) => {
        console.log(data);
        this.noticeshow = true;
        if(data.err == null) {
          this.newProductMessage = data.num + " new product (" + this.name + ") was added";
        } else {
          this.newProductMessage = data.err;
        }
        this.productid = null;
        this.name = "";
        this.description = "";
        this.price = null;
        this.units = null;
      })
    }
  }

}
