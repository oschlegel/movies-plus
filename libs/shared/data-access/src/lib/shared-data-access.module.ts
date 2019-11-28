import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './api-key.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }]
})
export class SharedDataAccessModule {}
