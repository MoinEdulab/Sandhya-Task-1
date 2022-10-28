import { Component, OnInit } from '@angular/core';
import userRequaste from '../../app/user.json';
interface student{
  applicationid:number;
  name:string;
  email:string;
  course:string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  students:student[]=userRequaste;
  displayedColumns: string[] = ['applicationid', 'name', 'email', 'course','action','requested'];
  dataSource = this.students;
  ngOnInit(): void {}

  handleviewAction(values:any){}

  handleNotesAction(values:any){}

  handleRejectAction(values:any){}
}

