import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolyearComponent } from './create-schoolyear.component';

describe('CreateSchoolyearComponent', () => {
  let component: CreateSchoolyearComponent;
  let fixture: ComponentFixture<CreateSchoolyearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSchoolyearComponent]
    });
    fixture = TestBed.createComponent(CreateSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
