import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodGallaryComponent } from './food-gallary/food-gallary.component';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  declarations: [AppComponent, FoodDetailComponent, FoodGallaryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
     NgxStarsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
