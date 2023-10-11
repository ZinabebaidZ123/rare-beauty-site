import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { WavesBgComponent } from './components/waves-bg/waves-bg.component';
import { ServicesComponent } from './components/services/services.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BannerComponent,
    AboutUsComponent,
    LandingComponent,
    WavesBgComponent,
    ServicesComponent,
    OurProductsComponent,
    OurWorkComponent,
    ContactUsComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule ,
    SharedModule
  ],
  exports: [
    LandingComponent , 
    // AboutUsComponent ,
    // WavesBgComponent
  ]
})
export class LandingPageModule { }
