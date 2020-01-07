import { Component, OnInit } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
declare var require: any
const googleicon = require('./../../icons/hassan.jpg');
@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  gicon=googleicon;
  postsList = []

  constructor( private postcrud: PostCrudService) {
    postcrud.posts.subscribe(post=> this.postsList.push(post));
    console.log(this.postsList);
   }

  ngOnInit() {
  }

 

}
