import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BarterModule} from './barter/barter.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';




@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFirestoreModule.enablePersistence(),
      AngularFireStorageModule,
      

      AngularFireAuthModule,
      BrowserModule,
      BrowserAnimationsModule,
      BarterModule,
      FormsModule,
      
      // AppRoutingModule,
   ],
   providers: [AngularFireAuthGuard, AngularFireStorage, AngularFirestore],
   bootstrap: [
      AppComponent,
      
   ]
})
export class AppModule { }
