import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModal2Component } from './form-modal2.component';

describe('FormModal2Component', () => {
  let component: FormModal2Component;
  let fixture: ComponentFixture<FormModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
