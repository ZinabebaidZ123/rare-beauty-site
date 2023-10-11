import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  header_variable = false;
  @HostListener("document:scroll")
  scrollFunction(){
   if(document.body.scrollTop > 220|| document.documentElement.scrollTop > 220){
     this.header_variable = true;
   }
   else{
     this.header_variable = false;
   }
  }
}
