import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'
import { NbMenuModule ,NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbContextMenuModule, NbActionsModule, NbContextMenuDirective, NbLayoutComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BarterComponent } from './barter.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { BarterHomeComponent } from './barter-home/barter-home.component'
import { BarterRoutes } from './barter.routing';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    BrowserAnimationsModule,
    BarterRoutes,
    MatMenuModule
  ],
  declarations: [BarterComponent,UserProfileComponent, BarterHomeComponent],
  exports:[BarterComponent, UserProfileComponent]
})
export class BarterModule { }
