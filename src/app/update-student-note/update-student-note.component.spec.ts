import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentNoteComponent } from './update-student-note.component';

describe('UpdateStudentNoteComponent', () => {
  let component: UpdateStudentNoteComponent;
  let fixture: ComponentFixture<UpdateStudentNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStudentNoteComponent]
    });
    fixture = TestBed.createComponent(UpdateStudentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
