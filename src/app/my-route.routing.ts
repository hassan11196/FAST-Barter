import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './../login/login.component';
import {UserProfileComponent} from './../user-profile/user-profile.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'login' , component: UserProfileComponent},
  // {path:'', component:AppComponent}
];

export const MyRouteRoutes = RouterModule.forRoot(routes, {useHash: true });
