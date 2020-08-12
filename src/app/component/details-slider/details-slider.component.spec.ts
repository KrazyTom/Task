import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSliderComponent } from './details-slider.component';

describe('DetailsSliderComponent', () => {
  let component: DetailsSliderComponent;
  let fixture: ComponentFixture<DetailsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
