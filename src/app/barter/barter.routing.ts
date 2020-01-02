import { Routes, RouterModule } from '@angular/router';
import {BarterHomeComponent} from './barter-home/barter-home.component';
import { LoginComponent } from './login/login.component'
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path:'', component: UserProfileComponent},
  { path:'login', component: LoginComponent}
];

export const BarterRoutes = RouterModule.forRoot(routes);
