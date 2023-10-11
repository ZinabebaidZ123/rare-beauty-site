import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsBannerComponent } from './components/products-banner/products-banner.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsSectionComponent } from './components/product-details-section/product-details-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductsBannerComponent,
    AllProductsComponent,
    ProductDetailsSectionComponent
  ],
  imports:[
    CommonModule ,
    SharedModule ,
    RouterModule
    
  ] ,
  exports:[
    ProductsComponent ,
    ProductDetailsComponent
  ]
  
})
export class NavbarPagesModule { }
