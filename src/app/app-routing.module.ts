import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { BaseMenuComponent } from './base-menu/base-menu.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{ path: 'foodList', component: FoodListComponent, },
 {path: '', component:BaseMenuComponent },
 {path : 'cart' , component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
