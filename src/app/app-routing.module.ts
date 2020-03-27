import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodGallaryComponent } from './food-gallary/food-gallary.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'FoodGallary', pathMatch: 'full' },
  { path: 'FoodGallary', component: FoodGallaryComponent },
  { path: 'foodDetails', component: FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
