import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from '../shared/classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getSomeGames();
  }

  getSomeGames() {
    this.productService.getSomeGames().subscribe(
      products => this.products = products
    )
  }
  
}
