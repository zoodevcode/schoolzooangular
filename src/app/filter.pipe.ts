import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';

@Pipe({
  name: 'filterStudent'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string): Student[] {
    if (!students || !filterText) {
      return students;
    }

    filterText = filterText.toLowerCase();
    return students.filter((student) =>
      student.nomStudent && student.nomStudent.toLowerCase().includes(filterText)
    );
  }

}
