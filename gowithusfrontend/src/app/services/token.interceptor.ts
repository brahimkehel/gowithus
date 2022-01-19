import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable} from 'rxjs';
import {LoaderService} from "./loader.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "./utilisateur.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private router: Router,private utilisateurService:UtilisateurService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.loaderService.isLoading.next(true);
    let header: any = "";
    let exp = new Date(parseInt(sessionStorage.getItem("exp")!) * 1000);

    if (sessionStorage.getItem("token")) {
      header = {
        setHeaders: {
          Authorization: 'Bearer ' + sessionStorage.getItem("token")
        }
      }
      if(parseInt(sessionStorage.getItem('exp')!)<=Math.floor((new Date).getTime()/1000)){
        sessionStorage.clear()
        this.router.navigateByUrl('/auth');
        this.utilisateurService.username.next("Connectez-vous");
      }
    }
    if (request.url.startsWith("http://localhost:8080/Annonces")) {
      console.log(request.headers)
      return next.handle(request);
    }
    let tokenizeRequest = request.clone(header);
    return next.handle(tokenizeRequest).pipe(
      finalize(() => {
          this.loaderService.isLoading.next(false);
        })
    );
  }
}
