import { Component } from "@angular/core";
import { SchoolYearService } from '../../data/services/school-year/school-year.service';
import { MessageService } from "primeng/api";
import { StudentService } from "../../data/services/student/student.service";
import { AppConfig } from "../../data/services/tools/app-config.service";
import { SubjectService } from "../../data/services/subjects/subjects.service";

@Component({
  selector: 'grades-management',
  templateUrl: 'grades-management.html',
  styleUrls: ['./grades-management.scss'],
  providers: [SchoolYearService, MessageService, StudentService, SubjectService],
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

  constructor(
    private schoolYearService: SchoolYearService,
    private studentService: StudentService,
    private appConfig: AppConfig,
    private subjectService: SubjectService
  ) {
    // get the school year
    this.schoolYearService.getSchoolYearData().then((data) => {
      this.schoolYears = data;
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
}