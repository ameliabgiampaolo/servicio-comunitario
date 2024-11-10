import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../../data/services/grades/grades.service';

@Component({
    selector: 'app-schedule',
    templateUrl: 'schedule.component.html',    
    styleUrls: ['./schedule.component.scss'],
    providers: [GradesService],
})
export class ScheduleComponent implements OnInit{

    constructor() {}

    ngOnInit() {
    }

}