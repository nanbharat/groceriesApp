import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private formbulider: FormBuilder ) { }

  data = false;   
  UserForm: any;    
  massage:string;    


  ngOnInit() {
    this.UserForm =  this.formbulider.group({
UserName:['',[Validators.required]],
Loginname:['',[Validators.required]],
Password:['',[Validators.required]],
Email:['',[Validators.required]],
ContactNO:['',[Validators.required]],
Address:['',[Validators.required]]
    });
  }

onSubmit()
{
  
}


}
