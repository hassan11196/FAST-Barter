import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-barter-home',
  templateUrl: './barter-home.component.html',
  styleUrls: ['./barter-home.component.css']
})
export class BarterHomeComponent implements OnInit {
  
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
