import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "./loader.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoading.next(true);
    let header:any="";
    if(sessionStorage.getItem("token")){
      header={
        setHeaders:{
          Authorization:'Bearer '+sessionStorage.getItem("token")
        }
      }
    }
    let tokenizeRequest=request.clone(header);
    return next.handle(tokenizeRequest).pipe(
      finalize(()=>{
        this.loaderService.isLoading.next(false);
      })
    );
  }
}
