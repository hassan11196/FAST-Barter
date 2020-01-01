import { Routes, RouterModule } from '@angular/router';
import {BarterHomeComponent} from './barter-home/barter-home.component';

const routes: Routes = [
  { path:'', component: BarterHomeComponent},
];

export const BarterRoutes = RouterModule.forRoot(routes);
