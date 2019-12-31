import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NbThemeModule,  NbSidebarModule, NbLayoutModule, NbButtonModule, NbContextMenuModule, NbActionsModule, NbContextMenuDirective, NbLayoutComponent  } from '@nebular/theme';

import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { MyRouteRoutes } from './my-route.routing';
import { environment } from './../environments/environment';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      UserProfileComponent,

   ],
   imports: [
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,NbContextMenuModule,NbActionsModule,
    NbSidebarModule.forRoot(),

      
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
      BrowserAnimationsModule,
      // NbEvaIconsModule,
      AppRoutingModule,

      BrowserModule,
      MyRouteRoutes,
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
