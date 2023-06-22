import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Output() onCategoryChange = new EventEmitter<string>()

  public currentCategory = '';
  public categories$: Observable<Array<string>>;

  constructor(
    private productsService: ProductsService, 
  ) {}

  onCategoryClick(category: string) {
    this.onCategoryChange.emit(category);
    this.currentCategory = category;
  }

  ngOnInit(): void {
    this.categories$ = this.productsService.getCategories()
  }
}
