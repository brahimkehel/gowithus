import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenizeRequest=request.clone({
      setHeaders:{
        Authorization:'Bearer '+sessionStorage.getItem("token")
      }
    })
    return next.handle(tokenizeRequest);
  }
}
