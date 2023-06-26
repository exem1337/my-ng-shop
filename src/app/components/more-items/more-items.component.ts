import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-more-items',
  templateUrl: './more-items.component.html',
  styleUrls: ['./more-items.component.scss']
})
export class MoreItemsComponent implements OnInit {
  @Input() category: string;
  @Input() productId: number;

  public items: Array<IProduct>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  onProductClick(id: number) {
    this.router.navigate([`products/${id}`]);
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
    this.productsService.getProductsByCategory(this.category, true).subscribe(
      res => this.items = res.filter(item => item.id !== this.productId)
    )
  }
}
