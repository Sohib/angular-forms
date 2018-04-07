import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuwithBuliderComponent } from './form-skuwith-bulider.component';

describe('FormSkuwithBuliderComponent', () => {
  let component: FormSkuwithBuliderComponent;
  let fixture: ComponentFixture<FormSkuwithBuliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuwithBuliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuwithBuliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
