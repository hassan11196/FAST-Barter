import { Component, OnInit, Input } from '@angular/core';


import { PostCrudService } from './../../services/post-crud.service';
import { Post } from 'src/app/models/post.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

declare var require: any
const googleicon = require('./../../icons/hassan.jpg');

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  gicon = googleicon;
  postsList = [];
  searchValue: string = "";


  constructor(public postcrud: PostCrudService) {



  }

  show() {
    console.log("hello");
  }
  postdetails(post) {

    console.log(post.timestamp['seconds'])
    var cart = {}
    cart = post;
    localStorage.setItem('cart', JSON.stringify(cart));

  }


  ngOnInit() {
    this.postcrud.currentSearch.subscribe((search) => {
      this.postsList.length = 0;
      this.searchValue = search
      console.log(search);
      console.log(this.searchValue);
      if (this.searchValue.length > 1) {
        console.log(this.postsList);
        console.log(this.searchValue);
        this.postcrud.searchPost(this.searchValue)
          .subscribe(res => {
            res.forEach(post => {


              this.postsList.push(post);

            })

          })

      }
      else {
        this.postcrud
          .getPosts()
          .subscribe(res => {
            res.forEach(post => {


              this.postsList.push(post);

            })
          });
      }
    });
    console.log(this.searchValue, 'kkkkkk');



  }
  // ngDoCheck() {
  //   this.postcrud.currentSearch.subscribe(search => this.searchValue = search);

  // }
  // ngOnChanges() {
  //   this.postcrud.currentSearch.subscribe(search => this.searchValue = search);
  //   console.log(this.searchValue);


  // }



}
