import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthGuard} from '@angular/fire/auth-guard'
import { MatMenuModule } from '@angular/material/menu'
import { NbUserModule, NbInputModule,NbCardModule, NbMenuModule ,NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbContextMenuModule, NbActionsModule, NbContextMenuDirective, NbLayoutComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material'
import { BarterComponent } from './barter.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { LoginComponent } from './login/login.component'
import { BarterHomeComponent } from './barter-home/barter-home.component';
import { BarterLayoutComponent } from './barter-layout/barter-layout.component';
import { DetailPostComponent} from './detail-post/detail-post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { BarterRoutes } from './barter.routing';
import {FormsModule} from '@angular/forms' 
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import { environment } from './../../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  imports: [
    
    CommonModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule,
    NbInputModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    BrowserAnimationsModule,
    BarterRoutes,
    MatMenuModule,
    NbCardModule,
    FontAwesomeModule,
    MatGridListModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule,
    AngularFireStorageModule,
    CarouselModule.forRoot()
    
    // Button,
  ],
  providers:[
    AngularFireAuthGuard, AngularFireStorage, AngularFirestore
  ],
  declarations: [BarterComponent,UserProfileComponent, BarterHomeComponent,DetailPostComponent, LoginComponent, BarterLayoutComponent, NewPostComponent, ForumPostComponent],
  exports:[BarterComponent]
})
export class BarterModule { }
