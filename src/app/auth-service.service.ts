import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of , throwError } from 'rxjs';

import {  catchError, map , retry } from 'rxjs/operators'
import { error } from 'protractor';
import { AppService } from './app.service';

import { LoginModel } from './Model/LoginModel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {





  public loggedUser: string;
  private url = "https://localhost:44370/api/Login/Login";


  constructor(private httpclient: HttpClient, private getBaseService: AppService) { }

  // httpOption:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
 


  // IsAuthGard(): Observable<any> {
    

  //  return this.httpclient.get(this.getBaseService.getBaseUrl() + '/Login/Index')
  // }

//   headers = new HttpHeaders();
// headers1 = this.headers.set('Access-Control-Allow-Origin', '');




 IsAuthGard()
{
  return this.httpclient.get(this.getBaseService.getBaseUrl() + '/Login/Index')
}

  LoginUser(user: LoginModel) {



    return this.httpclient.post<any>(this.url, user, this.httpOptions).pipe(
      map(result => {
        if (result && result["token"]) {
          console.log(result["token"]);
          console.log(user.Username);
          localStorage.setItem('jwt', result["token"]);
          localStorage.setItem('username', user.Username);
        }
        return result;
      })
    )



  
  
}




saveBlogPost(user:LoginModel): Observable<any> {
  return this.httpclient.post<any>(this.url , user, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}






}