import { ToggleMenuDirective } from './toggle-menu.directive';
import { ElementRef,Renderer } from '@angular/core';

describe('ToggleMenuDirective', () => {
  it('should create an instance', () => {
    var  eleref:ElementRef;
    var rend:Renderer;

    const directive = new ToggleMenuDirective(eleref, rend);
    expect(directive).toBeTruthy();
  });
});
