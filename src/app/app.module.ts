import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPagesModule } from './navbar-pages/navbar-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    LandingPageModule ,
     SharedModule ,
     NavbarPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
