import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {BarterModule} from './barter/barter.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
      BrowserModule,
      BrowserAnimationsModule,
      BarterModule,
      // AppRoutingModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      
   ]
})
export class AppModule { }
