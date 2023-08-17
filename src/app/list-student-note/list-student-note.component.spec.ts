import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentNoteComponent } from './list-student-note.component';

describe('ListStudentNoteComponent', () => {
  let component: ListStudentNoteComponent;
  let fixture: ComponentFixture<ListStudentNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStudentNoteComponent]
    });
    fixture = TestBed.createComponent(ListStudentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
