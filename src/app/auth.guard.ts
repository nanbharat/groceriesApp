import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {map, catchError} from 'rxjs/operators'
import { Observable,of } from 'rxjs';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private Authservice:AuthServiceService)
{

}


canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.Authservice.IsAuthGard()
  .pipe(
    map((res) => {return true;}),
    catchError(error => {return of(false);})
  );  
}
  
}
