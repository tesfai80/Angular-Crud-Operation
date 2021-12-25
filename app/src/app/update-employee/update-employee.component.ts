import { Component, Input, NgZone, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

 
  @Input() employee:any;
  employeeId:number | undefined;
  employeeName: string ="";
  companyName: string ="";
  month:Date=new Date();
 
  constructor(private sharedService: SharedService){}
    

  ngOnInit(): void {
   this.employeeId=this.employee.employeeId,
   this.employeeName=this.employee.employeeName,
   this.companyName=this.employee.companyName,
   this.month=this.employee.month
  }
  updateEmployee() {
    console.log(this.employeeId);
    var val = {
      employeeId:this.employeeId,
      employeeName:this.employeeName,
      companyName:this.companyName,
      month:this.month,
    
    };
      this.sharedService.update(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}
