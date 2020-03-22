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
  postsList = [];
  name;
  usersPost= [];
  constructor(private postcrud: PostCrudService, public auth: AuthService) {
    auth.user$.subscribe(event => this.name=event);
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getPosts();

    console.log(this.user);

    console.log(this.posts);
      console.log(this.usersPost);


  }
  postdetails(post){
    console.log(post.id)
    var detailPost={}
    detailPost=post;
    console.log(post)
    localStorage.setItem('detailPost', JSON.stringify(detailPost));
    }
  getPosts(){
    let postList$ = this.postcrud.getPostList();
    let posts = [];
    postList$.subscribe(postArray => {
       postArray.filter(action => {
        const data = action.payload.doc.data();

        if(data.user === undefined || this.user=== undefined){
          return false;
        }
        return this.user.email == data.user.email
      }).map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        this.usersPost.push( { id, ...data });
      });

      })




    this.postcrud
      .getPosts()
      .subscribe(res => {
        res.forEach(post => {
          if (this.user.email == post.user.email) {
            // console.log(post);
            if(post.user === undefined || this.user=== undefined){
              return false;
            }
            this.posts.push(post);
          }
        })
      });


    }



}
