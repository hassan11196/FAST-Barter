import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { User } from './../../models/user.model';
import { Post } from './../../models/post.model';

import { Observable, of } from 'rxjs';
import { PostCrudService } from './../../services/post-crud.service';
declare const require:any;
const googleicon = require('./../../icons/google-icon.svg');

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  gicon = googleicon;
  user: any;
  posts = [];
  name;
  constructor(private postcrud: PostCrudService, public auth: AuthService) {
    auth.user$.subscribe(event => this.name=event);
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getPosts();

    console.log(this.user);
    console.log(this.posts);



  }
  postdetails(post){
    console.log(post.timestamp['seconds']) 
    var detailPost={}
    detailPost=post;
    console.log(post)
    localStorage.setItem('detailPost', JSON.stringify(detailPost));
    }
  getPosts(){
    this.postcrud
      .getPosts()
      .subscribe(res => {
        res.forEach(post => {
          if (this.user.email == post.user.email) {

            this.posts.push(post);
          }
        })
      });
    }

}
