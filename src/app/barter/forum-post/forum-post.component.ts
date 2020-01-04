import { Component, OnInit } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  postsList = []

  constructor( private postcrud: PostCrudService) {
    postcrud.posts.subscribe(post=> this.postsList.push(post));
    console.log(this.postsList);
   }

  ngOnInit() {
  }

 

}
