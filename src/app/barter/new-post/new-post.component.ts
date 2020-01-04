import { Component, OnInit } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
import { AuthService } from './../../services/auth.service';
import { Post } from './../../models/post.model';
import { timestamp } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postTitle = '';
  postDescription = '';
  user = null;
  constructor(private postcrud: PostCrudService, auth:AuthService) {
    auth.user$.subscribe( user => this.user = user);
    
  }

  ngOnInit() {
  }
  postSave(){
    console.log('Post');
    console.log(this.postcrud);
    let p:Post ={
      timestamp : new Date(),
      title: this.postTitle,
      description:this.postDescription,
      user : this.user
    }
    console.log('Hitting Firebase');
    this.postcrud.addPost(p);
  }
  postTitleChange(event){
    console.log(event);
    this.postTitle = event.target.value;
  }
  postDescriptionChange(event){
    console.log(event);
    this.postDescription = event.target.value;
    console.log(this.postDescription);
  }

}
