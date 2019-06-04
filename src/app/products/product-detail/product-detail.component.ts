import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    let id = + this.route.snapshot.params["id"];
    if(id) {
      this
        .productService
        .getProductById(id)
        .subscribe(
          result => this.product = result
        )
    }
  }

  deleteProduct() : void {
    if(window.confirm(`Are you sure to delete this product: ${this.product.name} ??`)) {
      this
        .productService
        .deleteProduct(this.product.id)
        .subscribe(
          () => {
            console.log("Product deleted!");
            this.productService.clearCache();
            this.router.navigateByUrl('/products');
          },
          error => console.error('Could not delete product! ' + error)
        )
    }
  }

}
