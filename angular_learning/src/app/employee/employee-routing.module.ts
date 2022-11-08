import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {
      path: 'table' ,
      pathMatch:'full',
      component:EmployeeComponent
    },
    {
      path: 'detail/:id' ,
      pathMatch:'full',
      component:EmployeeDetailComponent
    },
    {
      path: '**' ,
      pathMatch:'full',
      redirectTo : 'table'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
