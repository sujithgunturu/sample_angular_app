import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
//import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  total = 0;
  ngOnInit(){
    
  }
    carts = [];
    products = [
      { p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "assets/images/1.jpg", p_price: 28990 },
      { p_id: "2", p_name: "iPhone 8", p_image: "assets/images/2.png", p_price: 60138 },
      { p_id: "3", p_name: "Sony Xperia Z3+", p_image: "assets/images/3.png", p_price: 1519000 },
      { p_id: "4", p_name: "ALIENWARE 17", p_image: "assets/images/4.png", p_price: 75187 },
      { p_id: "5", p_name: "Luvaglio Laptop", p_image: "assets/images/5.png", p_price: 50115000 },
      { p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "assets/images/6.png", p_price: 9013 }
    ];
  add_cart(product) {
    if (product) {
      this.carts.push({ p_id: product.p_id, p_name: product.p_name, p_price: product.p_price });
      this.total+=product.p_price;
    }
    
  }


  

  setTotals(cart) {
    if (cart) {
      this.total += cart.p_price;
    }
  }

  remove_cart(cart) {
    if (cart) {
      this.carts.splice(this.carts.indexOf(cart), 1);
      this.total -= cart.p_price;
    }
  }
}
