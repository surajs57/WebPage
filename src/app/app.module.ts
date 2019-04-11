import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { InterestComponent } from './interest/interest.component';
import { InterestService } from './interest/interest.service';

@NgModule({
  declarations: [
    AppComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
