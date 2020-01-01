import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component'
import {UserProfileComponent} from './../user-profile/user-profile.component';

const routes: Routes = [
  {path:'' , component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
