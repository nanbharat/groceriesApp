import { OpenProfileDirective } from './open-profile.directive';
import { ElementRef,Renderer } from '@angular/core';

describe('OpenProfileDirective', () => {
  it('should create an instance', () => {

    var  eleref:ElementRef;
    var rend:Renderer;

    const directive = new OpenProfileDirective(eleref, rend);
    expect(directive).toBeTruthy();
  });
});
