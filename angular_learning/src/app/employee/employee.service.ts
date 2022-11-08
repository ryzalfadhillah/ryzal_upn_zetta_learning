export interface employ {id : string , name : string , position : string , availability : string ,action : string}
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of } from "rxjs"
export interface Employee {id :string}

@Injectable({
    providedIn :'root'
})

  export class employeeService{
    private Employ : BehaviorSubject<employ[]> =  new BehaviorSubject<employ[]>([
        {id : 'EMP0001' , name : 'Udin Yang Pertama', position :'CEO', availability :  'Available' ,action : 'view detail'},
        {id : 'EMP0002' , name : 'Udin Yang Kedua', position :'Manager', availability :  'Available' ,action : 'view detail'},
        {id : 'EMP0003' , name : 'Udin Yang Ketiga', position :'Kasir', availability :  'Available' ,action : 'view detail'},
        {id : 'EMP0004' , name : 'Udin Yang Kempat', position :'Barista', availability :  'Available' ,action : 'view detail'},
        {id : 'EMP0005' , name : 'Udin Yang Kelima', position :'Chef', availability :  'Available' ,action : 'view detail'}
      ]);

      constructor(){
      }
      
      public employ$ = this.Employ.asObservable();

      getEmployById(id:string) : any{
        const employeearray = this.Employ.getValue();
        console.log(employeearray)
        const employ = employeearray.find(employ => employ.id ===id)
        return employ || null;
      }
}