import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-page/components/landing/landing.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ProductsComponent } from './navbar-pages/components/products/products.component';
import { ProductDetailsComponent } from './navbar-pages/components/product-details/product-details.component';
const routes: Routes = [
  {path:'',redirectTo:"landing-page" , pathMatch:'full'},
  {path:"landing-page", component:LandingComponent},
  {path:"products-page" , component: ProductsComponent},
  {path:"product-details-page" , component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
