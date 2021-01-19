import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WinAuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url === 'https://fmea-qa/api/auth/getuser' || request.url === 'https://fmea/api/auth/getuser') {
      request = request.clone({
        withCredentials: true
      });
    }
    return next.handle(request);
  }
  
}
