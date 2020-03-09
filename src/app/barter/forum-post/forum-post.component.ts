import { Component, OnInit } from '@angular/core';


import { PostCrudService } from './../../services/post-crud.service';
import { Post } from 'src/app/models/post.model';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage' ;

declare var require: any
const googleicon = require('./../../icons/hassan.jpg');

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  gicon=googleicon;
  postsList= []
  constructor( public postcrud: PostCrudService) {
    postcrud.posts.subscribe(post=> this.postsList.push(post));
    console.log(this.postsList);

   }
   
  show(){
console.log("hello");
  }
   postdetails(post){
    console.log(post.timestamp['seconds']) 
    var cart={}
    cart=post;
    localStorage.setItem('cart', JSON.stringify(cart));
    }
    

  ngOnInit() {

  }

  

}
