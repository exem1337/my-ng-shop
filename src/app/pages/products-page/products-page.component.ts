import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from 'src/app/services/products.service.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Array<IProduct>>;
  
  constructor(public productService: ProductsService) {}

  onCategoryChange(category: string) {
    console.log('change')
    this.loadProducts(category);
  }

  loadProducts(category?: string) {
    this.products$ = this.productService.getProductsByCategory(category);
  }

  ngOnInit(): void {
    this.loadProducts();
  }
}
