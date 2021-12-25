import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any = [];
  activateAddEditStuCom:boolean = false;
  modalTitle:any;
  employee:any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.sharedService.getEmployeeList().subscribe(data => {
      this.employeeList = data;
      console.log(this.employeeList);
    });
  }


  remove(employeeId: any) {
    this.sharedService.delete(employeeId).subscribe(d => {
      this.employeeList = d;
      this.getEmployees();
      console.log('deleted');
    })
  }

  update(employee: Employee) {
    this.employee=employee;
    this.activateAddEditStuCom=true;
    this.modalTitle="Edit Employee";
  }
  closeClick(){
    this.activateAddEditStuCom=false;
    this.getEmployees();
  }
}
