import { Component, NgZone, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-emoloyee',
  templateUrl: './create-emoloyee.component.html',
  styleUrls: ['./create-emoloyee.component.css']
})
export class CreateEmoloyeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private sharedService: SharedService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  ) {

    this.employeeForm = formBuilder.group({
      employeeName: [''],
      companyName: [''],
      month: [''],
    });
  }

  ngOnInit(): void {
  }
  createEmployee() {
    this.sharedService.create(this.employeeForm.value).subscribe(()=>{
      console.log('Data added successfully!')
      this.ngZone.run(() => this.router.navigateByUrl('/employee'))
    }, (err) => {
      console.log(err);
    });
  }

}
