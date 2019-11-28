import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedDataAccessModule } from '@movies-plus/shared/data-access';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, AppRoutingModule, SharedDataAccessModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
