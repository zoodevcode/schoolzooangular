import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSchoolyearComponent } from './update-schoolyear.component';

describe('UpdateSchoolyearComponent', () => {
  let component: UpdateSchoolyearComponent;
  let fixture: ComponentFixture<UpdateSchoolyearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSchoolyearComponent]
    });
    fixture = TestBed.createComponent(UpdateSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
