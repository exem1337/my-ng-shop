import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from 'src/constants/routes.const';

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
