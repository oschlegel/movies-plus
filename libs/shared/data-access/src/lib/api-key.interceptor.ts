import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('graphql')) {
      return next.handle(req);
    }
    return next.handle(
      req.clone({ params: req.params.append('apikey', '726ff8bd') })
    );
  }
}
