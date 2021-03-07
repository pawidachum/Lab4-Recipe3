import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  @ViewChild('productList',{static:true})
  productList: ProductListComponent;

  ngOnInit():void{
    this.productList.products = [
      {
      name: 'ส้มโอ',
      price: 990
      },
      {
      name: 'แตงโม', 
      price: 1000
      },
      {
      name: 'มะพร้าวน้ําหอม',
      price: 500
      },
      {
      name: 'มะม่วง',
      price: 800
      }
    ];
  }

  constructor() {}

  title = 'Lab4-Recipe2';
}
