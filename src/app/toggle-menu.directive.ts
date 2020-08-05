import { Directive,HostBinding,  HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appToggleMenu]'
})
export class ToggleMenuDirective {

  IsClick:boolean = false;
  IsDisplay:boolean;


  constructor(private eleRef:ElementRef, private renderer:Renderer) { }
  @HostBinding('class.active') isOpen = false;
@HostListener('click') click(){
this.isOpen = !this.isOpen;
}


//   @HostListener('click') click()
//   {

//     debugger;
  
    
// //     this.IsClick = !this.IsClick;
// // if( this.IsClick == true )
// // {
// //   this.IsDisplay = true;
// //   this.renderer.setElementAttribute(this.eleRef.nativeElement,'class', 'sidebar-dropdown active');
// // }
// // else{
// //   this.IsDisplay = false;

// //   this.renderer.setElementAttribute(this.eleRef.nativeElement,'class', 'sidebar-dropdown');
// // }

//this.renderer.setElementStyle(this.eleRef.nativeElement.querySelector('sidebar-submenu'), 'display','block');
//this.renderer.setElementStyle(this.eleRef.nativeElement.querySelector('sidebar-submenu'),'display','none');

 
  //    this.renderer.setElementAttribute(this.eleRef.nativeElement,'class','side-dropdown');

 //this.renderer.setElementStyle(this.eleRef.nativeElement.querySelector('my-element'),'class', 'display: block;');
 

    // this.renderer.setElementClass(this.eleRef.nativeElement, 'sidebar-dropdown', true);

  }




