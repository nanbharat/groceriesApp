



import { Directive , HostListener, HostBinding ,ViewChild, ElementRef,Renderer} from '@angular/core';
import { HeaderComponent } from  './header/header.component';
import { tick } from '@angular/core/testing';


@Directive({
  selector: '[appOpenProfile]'
})
export class OpenProfileDirective {

  constructor(private eleRef:ElementRef, private renderer:Renderer) { }




  //class="dropdown profile_details_drop"
    @HostListener('mouseover') onMouseOver() 
    { 
    this.OpenDropDown('open','block');
    } 



    @HostListener('mouseout') onMouseOut() 
    { 
      let elem = document.getElementById("drpLogin");
    //console.log(this.elName);
    this.renderer.setElementStyle(elem, 'display', 'none');
    } 



    OpenDropDown(dropdown:string, display1:string)
    { 
      this.renderer.setElementClass(this.eleRef.nativeElement, dropdown, true);
  
    let elem = document.getElementById("drpLogin");
    //console.log(this.elName);
    this.renderer.setElementStyle(elem, 'display', display1);
    console.log(elem);

    }
  
  

  }
   //dropdown profile_details_drop
//   @HostListener('mouseout') onMouseOut() {
//    this.renderer.setElementClass(this.eleRef.nativeElement, 'dropdown profile_details_drop', true);

//   let elem = document.getElementById("drpLogin");
//  //  this.ShowDisplay.nativeElement.style.display = 'block';

//    //this.elName.nativeElement.style.display = 'block';
//    this.renderer.setElementStyle(elem,'display', 'block')
// }


