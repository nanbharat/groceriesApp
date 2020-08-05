import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandedFoodsComponent } from './branded-foods.component';

describe('BrandedFoodsComponent', () => {
  let component: BrandedFoodsComponent;
  let fixture: ComponentFixture<BrandedFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandedFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
