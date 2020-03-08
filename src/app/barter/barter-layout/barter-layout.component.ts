import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { User } from './../../models/user.model';
declare let require:any;
const fasticon=require('./../../icons/fast.jpg');
@Component({
  selector: 'app-barter-layout',
  templateUrl: './barter-layout.component.html',
  styleUrls: ['./barter-layout.component.css']
})
export class BarterLayoutComponent implements OnInit {
  title = 'FastBarter';
  ficon=fasticon;
  name ;
  constructor(public auth: AuthService) { 
    
  }

  ngOnInit() {
   
  }

}
