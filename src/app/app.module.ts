import {BrowserModule, DomSanitizer, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TorrentsComponent } from './torrents/torrents.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPseudoCheckboxModule, MatRadioModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TorrentService} from './service/torrent.service';
import { HttpClientModule } from '@angular/common/http';
import { UnsanitizedPipe } from './pipes/unsanitized.pipe';
import { TorrentAddDialogComponent } from './torrents/torrent-add-dialog/torrent-add-dialog.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TorrentsComponent,
    UnsanitizedPipe,
    TorrentAddDialogComponent,
    AutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatPseudoCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule
  ],
  entryComponents: [
    TorrentAddDialogComponent
  ],
  providers: [
    Title,
    TorrentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
