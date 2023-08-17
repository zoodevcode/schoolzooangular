import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { SchoolyearService } from './schoolyear.service';
import { SchoolService } from './school.service';
import { StudentNoteService } from './student-note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'schoolzoo';
  constructor(public studentService: StudentService, public schoolyearService: SchoolyearService, public schoolService: SchoolService, public studentNoteService: StudentNoteService) { }

}
