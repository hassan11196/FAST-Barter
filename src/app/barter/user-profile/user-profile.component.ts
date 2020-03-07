import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import { UserPostsService } from 'src/app/services/user-posts.service';
import { Post } from 'src/app/models/post.model';
import { PostCrudService } from 'src/app/services/post-crud.service';
declare const require:any;
const googleicon = require('./../../icons/google-icon.svg');

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_posts:any
  gicon=googleicon;
  user ;
  constructor(public auth: AuthService, public up: UserPostsService, public pcs: PostCrudService) {
    auth.user$.subscribe(event => {this.user=event;
      this.user_posts = pcs.getPostByUser(this.user);});

    console.log(this.user_posts);
    // console.log(user-name);
  }
  ngOnInit() {
  }

}
