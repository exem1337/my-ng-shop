import { Routes } from "@angular/router";
import { ProductPageComponent } from "src/app/pages/product-page/product-page.component";
import { ProductsPageComponent } from "src/app/pages/products-page/products-page.component";

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products/:id',
    component: ProductPageComponent
  }
]