import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsliderComponent } from './headslider.component';

describe('HeadsliderComponent', () => {
  let component: HeadsliderComponent;
  let fixture: ComponentFixture<HeadsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
