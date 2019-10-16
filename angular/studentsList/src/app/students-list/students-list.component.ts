import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../students.data';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsToDisplay: Student[] = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
