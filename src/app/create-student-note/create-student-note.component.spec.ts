import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentNoteComponent } from './create-student-note.component';

describe('CreateStudentNoteComponent', () => {
  let component: CreateStudentNoteComponent;
  let fixture: ComponentFixture<CreateStudentNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStudentNoteComponent]
    });
    fixture = TestBed.createComponent(CreateStudentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
