import { Component } from '@angular/core';
import { ShoppingCartService, Product } from '../shopping-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: Product[] = [
    {
      "id": 1,
      "name": "Vintage Hat",
      "price": 29.99,
      "image": "../../assets/images/hat.jpg"
    },
    {
      "id": 2,
      "name": "Styling Hat",
      "price": 19.99,
      "image": "../../assets/images/hat2.jpg"
    },
    {
      "id": 3,
      "name": "Nike Hat",
      "price": 14.99,
      "image": "../../assets/images/hat3.jpg"
    },
    {
      "id": 4,
      "name": "Black Nike Hat",
      "price": 49.99,
      "image": "../../assets/images/hat4.jpg"
    },
    {
      "id": 5,
      "name": "Disney Hat",
      "price": 34.99,
      "image": "../../assets/images/hat5.jpg"
    },
    {
      "id": 6,
      "name": "Jordan Hat",
      "price": 34.99,
      "image": "../../assets/images/hat6.jpg"
    },
    {
      "id": 7,
      "name": "Winter Hat",
      "price": 34.99,
      "image": "../../assets/images/hat7.jpg"
    },
    {
      "id": 8,
      "name": "Straw Hat",
      "price": 34.99,
      "image": "../../assets/images/hat8.jpg"
    }
  ];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
  }

  onAddToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
  }
}
