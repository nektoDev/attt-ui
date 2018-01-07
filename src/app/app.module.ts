import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TorrentsComponent } from './torrents/torrents.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TorrentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
