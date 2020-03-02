import { Component, OnInit } from '@angular/core';

import { PostCrudService } from './../../services/post-crud.service';
import { Post } from 'src/app/models/post.model';
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
   postdetails(post){
     var cart={}
     cart=post;
     localStorage.setItem('cart', JSON.stringify(cart));
    //  localStorage.setItem('cart',post);
    //  console.log("Ahsan")
    //  var user = JSON.parse(localStorage.getItem('cart'));
    //  console.log(user) 
    }
    

  ngOnInit() {
  }

 

}
