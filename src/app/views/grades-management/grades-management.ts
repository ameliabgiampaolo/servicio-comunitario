import { Component } from "@angular/core";
import { SchoolYearService } from '../../data/services/school-year/school-year.service';
import { MessageService } from "primeng/api";
import { StudentService } from "../../data/services/student/student.service";
import { AppConfig } from "../../data/services/tools/app-config.service";
import { SubjectService } from "../../data/services/subjects/subjects.service";
import { GradesService } from "../../data/services/grades/grades.service";

@Component({
  selector: 'grades-management',
  templateUrl: 'grades-management.html',
  styleUrls: ['./grades-management.scss'],
  providers: [SchoolYearService, MessageService, StudentService, SubjectService, GradesService, MessageService],
})
export class GradesManagementComponent {
  schoolYears: any;
  selectedSchoolYear: any;

  allStudents: any;
  selectedStuded: any;

  groupedCourses: any;
  selectedCourse: string;
  section: string;
  year: string;

  subjects: any;
  subjectSelected: string;

  activity: string = '';
  note: number | null = null;
  gradePct: number | null = null;

  allGrades: any;

  constructor(
    private schoolYearService: SchoolYearService,
    private studentService: StudentService,
    private appConfig: AppConfig,
    private subjectService: SubjectService,
    private gradesService: GradesService,
    private messageService: MessageService
  ) {
    // get the school year
    this.schoolYearService.getSchoolYearData().then((data) => {
      this.schoolYears = data;
    });   

    this.allGrades = [];
  
    this.gradesService.getGrades().then((data) => {
      this.allGrades = Array.isArray(data) ? data : [];
    });

    // get all courses
    this.groupedCourses = this.appConfig.subjects;
  }

  public filterStudents(): void {
    const foundItem = this.groupedCourses
    .flatMap(group => group.items) 
    .find(item => item.value === this.selectedCourse);

  
    if (foundItem) {
      this.section = foundItem.section;
      this.year = foundItem.year;
    }

    // get all students by year and section
    this.studentService.getStudent().then((data) => {
      this.allStudents = data.filter(item => item.course === this.year && item.section === this.section);
    });   
  }

  public getAllSubjects(): void {
    this.subjectService.getsubject().then((data) => {
      this.subjects = data.filter((item) => item.course === this.getCourseNumber(this.year));
    });
  }

  private getCourseNumber(year): number {
    switch (year) {
      case 'Primer Año':
        return 1;
        case 'Segundo Año':
          return 2;
          case 'Tercer Año':
            return 3;
            case 'Cuarto Año':
              return 4;
              case 'Quinto Año':
                return 5;
      default:
        break;
    }
  }

  uploadGrade() {
    const newGrade = {       
      id: Math.floor(Math.random() * 10000),
      name: this.activity,
      date: new Date().toLocaleDateString(),
      status: this.note.toString(),
      schoolYear: this.selectedSchoolYear.period,
      representative: { name: this.subjectSelected['name'] }, 
      username: this.selectedStuded.username,
    };
  
    this.gradesService.addGrade(newGrade); 
  
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Nota cargada exitosamente.',
      life: 3000,
    });
  
    this.clearFields();
  }
  
  clearFields() {
    this.activity = '';
    this.note = null;
    this.gradePct = null;
  }
}