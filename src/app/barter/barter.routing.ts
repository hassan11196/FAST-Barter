import { Routes, RouterModule, } from '@angular/router';
import { BarterHomeComponent } from './barter-home/barter-home.component';
import { LoginComponent } from './login/login.component'
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { NewPostComponent} from './new-post/new-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { EditPostComponent } from './edit-post/edit-post.component';
const RedirectToHome = ()=> redirectLoggedInTo(['home']);
const RedirectToLogin = ()=> redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path:'login', component: LoginComponent, canActivate:[AngularFireAuthGuard], data: {authGuardPipe: RedirectToHome}},
  { path:'home', component: BarterHomeComponent, canActivate:[AngularFireAuthGuard],  data: { authGuardPipe: RedirectToLogin}},
  { path:'newpost', component: NewPostComponent,canActivate:[AngularFireAuthGuard],  data: { authGuardPipe: RedirectToLogin} },
  { path:'profile',component:UserProfileComponent, canActivate:[AngularFireAuthGuard],  data: { authGuardPipe: RedirectToLogin}},
  { path:'detailpost/:timestamp', component: DetailPostComponent,canActivate:[AngularFireAuthGuard],  data: { authGuardPipe: RedirectToLogin} },
  { path:'editpost',component:EditPostComponent,canActivate:[AngularFireAuthGuard],  data: { authGuardPipe: RedirectToLogin}},
  // { path: '**',  },
];

export const BarterRoutes = RouterModule.forRoot(routes);
