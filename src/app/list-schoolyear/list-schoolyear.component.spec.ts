import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolyearComponent } from './list-schoolyear.component';

describe('ListSchoolyearComponent', () => {
  let component: ListSchoolyearComponent;
  let fixture: ComponentFixture<ListSchoolyearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSchoolyearComponent]
    });
    fixture = TestBed.createComponent(ListSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
