import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BarterModule} from './barter/barter.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from 'angularfire2/storage';




@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireStorageModule,
      AngularFirestoreModule,
      AngularFireAuthModule,
      BrowserModule,
      BrowserAnimationsModule,
      BarterModule,
      FormsModule,
      // AppRoutingModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      
   ]
})
export class AppModule { }
