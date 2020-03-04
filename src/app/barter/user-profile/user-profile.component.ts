import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'

const googleicon = require('./../../icons/google-icon.svg');

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  gicon=googleicon;
  name ;
  constructor(public auth: AuthService) { 
    auth.user$.subscribe(event => this.name=event);
    // console.log(user-name);
  }
  ngOnInit() {
  } 

}
