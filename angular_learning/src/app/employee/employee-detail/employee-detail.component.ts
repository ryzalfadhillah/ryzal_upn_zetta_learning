import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { employeeService } from '../employee.service';
interface Employee {id : string  , name : string , position : string , availability : string ,action : string }

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  
  private emplyoeeid : string|null =null
  public employee : Employee|null = null

  constructor(private route:ActivatedRoute , private employservice: employeeService) {
    this.emplyoeeid = this.route.snapshot.paramMap.get('id')
    console.log(this.emplyoeeid);
   }
 

  ngOnInit(): void {
    if(typeof this.emplyoeeid === 'string'){
      this.employee = this.employservice.getEmployById(this.emplyoeeid)
    }
    console.log(this.employee);
    
  }

  

}