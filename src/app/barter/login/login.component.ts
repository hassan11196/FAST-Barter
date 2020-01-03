import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';

declare var require: any
const googleicon = require('./../../icons/google-icon.svg');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gicon = googleicon
  constructor(public auth: AuthService) { 

  }

  ngOnInit() {
  }

}
