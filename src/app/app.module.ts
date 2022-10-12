import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserauthModule} from './userauth/userauth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamiPipe } from './mypipes/hami.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HamiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserauthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
