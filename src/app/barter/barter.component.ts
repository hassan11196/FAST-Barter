import { Component, OnInit } from '@angular/core';

declare const require:any;

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.css']
})
export class BarterComponent implements OnInit {

  items = [
    {
      title: 'Profile',
      expanded: false,
      children: [
        {
          title: 'Change Password',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
  ];

  ngOnInit() {
  }

}
