import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSchoolComponent } from './update-school.component';

describe('UpdateSchoolComponent', () => {
  let component: UpdateSchoolComponent;
  let fixture: ComponentFixture<UpdateSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSchoolComponent]
    });
    fixture = TestBed.createComponent(UpdateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
