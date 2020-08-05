import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }
  


  @ViewChild('name',{static:false}) Logincomp:LoginComponent;


  ngOnInit() {
  }

 

  getLoginForm()
  {
    this._router.navigate(['/','login']);
  }

  getRegisterForm()
  {
    this.Logincomp.IsLogin = false;
    this._router.navigate(['/','login']);
  }


  

}
