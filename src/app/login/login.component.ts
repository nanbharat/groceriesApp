import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginModel } from '../Model/LoginModel';
import { AuthServiceService } from '../auth-service.service';
import { environment } from  'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, private _authService:AuthServiceService) { }

  IsLogin:boolean = true;
  token:any;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';




  

  ngOnInit() {
  }

  ChangeForm()
  {
    this.IsLogin = !this.IsLogin;
  }

  Login( loginuser:NgForm )
  {

    let loginUser:LoginModel
    = {
      Username:loginuser.value.Username,
      Password:loginuser.value.Password
      };

      this._authService.saveBlogPost(loginUser).subscribe((data) => {
         data.token as string;
         this.doLoginUser(data.token  as string);
      });

 
    if( localStorage.getItem(this.JWT_TOKEN) != null )
    {
     
     
      this.IsLogin = !this.IsLogin;
      this._router.navigate(['/','login']);

    }


    this.IsLogin = !this.IsLogin;
    this._router.navigate(['/','login']);

  }




  
doLoginUser(tokens:any )
{
this.storeToken(tokens);
}


storeToken( token:string )
{

  localStorage.setItem(environment.JWT_TOKEN, token);
  console.log(localStorage.getItem(environment.JWT_TOKEN));

} 








}


