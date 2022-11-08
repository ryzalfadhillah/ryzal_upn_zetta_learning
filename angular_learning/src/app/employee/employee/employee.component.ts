import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employ, employeeService } from '../employee.service';

export interface employs {id : number , name : string , position : string , availability : string ,action : string }

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public employs : Observable<employ[]> 
  constructor( private employservice: employeeService) { 
    this.employs = this.employservice.employ$
    console.log(this.employs)
  }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = [ 'id','name', 'position', 'availability' ,'action'];
}