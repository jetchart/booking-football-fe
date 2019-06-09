import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDatepickerIntl,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { ReservesComponent } from './components/reserves/reserves.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HourDayService} from './services/hour.day.service';
import { UserListComponent } from './components/user-list/user-list.component';
import {UserService} from './services/user.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import {MatDialogModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SnackBarService} from './services/snack-bar-service';
import {MatCardModule} from '@angular/material/card';
import { DummyComponent } from './components/dummy/dummy.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const firebaseConfig = {
  apiKey: "AIzaSyDAigbBN2xFu8L0dsu49TADqTVtPdWFLiU",
  authDomain: "booking-football.firebaseapp.com",
  databaseURL: "https://booking-football.firebaseio.com",
  projectId: "booking-football",
  storageBucket: "booking-football.appspot.com",
  messagingSenderId: "569178031067",
  appId: "1:569178031067:web:97bee066aa28fdc9"
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ReservesComponent,
    ContactComponent,
    UserListComponent,
    UserEditComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatProgressSpinnerModule
  ],
  providers: [HourDayService, UserService, SnackBarService, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [UserEditComponent]
})
export class AppModule { }
