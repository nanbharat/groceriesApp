import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpRequest,
 HttpEvent, HttpHandler, HttpErrorResponse,  HttpResponse} 
 from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from  'src/environments/environment';


@Injectable(
 
)
export class MyHttpInterceptor implements  HttpInterceptor{

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
              //Update Header add token with each and every request

              const updateRequest  = request.clone({
                headers:request.headers.set("Authorization", localStorage.getItem(environment.JWT_TOKEN))
            });
    
            console.log("Before making api call : ", updateRequest);
    
            return next.handle(request).pipe(
                tap( 
            res => {
                    //Http response to console
                    if( res instanceof HttpResponse )
                    {
                        console.log( " api call Success:"+res);
                    }
                },
                err=>{
                    if( err instanceof HttpResponse )
                    {
                        console.log( " api call errorlog:"+err);
                    }
                }           
                )
            );
    
    
    
    }



}