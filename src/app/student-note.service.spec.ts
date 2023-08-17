import { TestBed } from '@angular/core/testing';

import { StudentNoteService } from './student-note.service';

describe('StudentNoteService', () => {
  let service: StudentNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
