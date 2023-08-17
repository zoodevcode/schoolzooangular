import { Student } from "./student";
import { Subject } from "./subject";

export class StudentNote {
    id?: number;
    score?: number;
    evaluationDate?: string;
    student?: Student;
    subject?: Subject;
  }