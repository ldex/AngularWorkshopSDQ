import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = 'Products';
  products: Product[];
  selectedProduct: Product;
  

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {
   
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
