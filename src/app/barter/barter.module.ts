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
import { BarterRoutes } from './barter.routing';
import {FormsModule} from '@angular/forms' 
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule, AngularFireStorage} from 'angularfire2/storage';
import { environment } from './../../environments/environment';
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireStorageModule,
    // Button,
  ],
  providers:[
    AngularFireAuthGuard, AngularFireStorage
  ],
  declarations: [BarterComponent, BarterHomeComponent, LoginComponent, BarterLayoutComponent, NewPostComponent, ForumPostComponent],
  exports:[BarterComponent]
})
export class BarterModule { }
