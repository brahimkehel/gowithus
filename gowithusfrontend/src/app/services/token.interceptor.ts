import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "./loader.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService,private router:Router) {}

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
    if(request.url.startsWith("http://localhost:8080/Annonces")){
      console.log(request.headers)
        return next.handle(request);
    }
    let tokenizeRequest=request.clone(header);
    return next.handle(tokenizeRequest).pipe(
      finalize(()=>{
        this.loaderService.isLoading.next(false);
      })
    );
  }
}
