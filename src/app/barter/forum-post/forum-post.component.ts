import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { AuthService } from './../../services/auth.service';
import { Comment } from './../../models/comment.model';

import { PostCrudService } from './../../services/post-crud.service';
import { Post } from 'src/app/models/post.model';
import { Observable} from 'rxjs/Observable';
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
  showModal: boolean;
  constructor( public postcrud: PostCrudService,auth:AuthService,public afStorage:AngularFirestore,public storage: AngularFireStorage) {
    postcrud.posts.subscribe(post=> this.postsList.push(post));
    console.log(this.postsList);
    auth.user$.subscribe( user => this.user = user);

   }
   uploads: any[] = [];
   allPercentage: Observable<any>;
   files: Observable<any>;
   picsBase64Encoded: any[] = [];
   
   
   downloadURL: Observable<string>;
   uploadProgress: Observable<number>;
   //afStorage: AngularFireStorage;
   ref:AngularFireStorageReference;
   task:AngularFireUploadTask;


  commentDescription = '';
  user = null;
  id = '';
  post=null;
  show(){
console.log("hello");
  }

  ngOnInit() {
    this.files = this.afStorage.collection('files').valueChanges();

  }

  commentSave(event){
    console.log('Post');
    // const mid =document.getElementById('link').getAttribute('href')
    console.log(this.postcrud);
    let p:Comment ={
      timestamp : new Date(),
      description:this.commentDescription,
      user : this.user,
      pics: this.picsBase64Encoded,
      post:null,

  
    }
  
    console.log('Hitting Firebase');
    this.postcrud.addComment(p);
  }


  upload(event){
    this.uploads = [...this.uploads,...event.target.files];
    console.log(this.uploads);
    
    const filelist = event.target.files;
    const reader = new FileReader();
    
    for (const file of filelist) {
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.picsBase64Encoded = [... this.picsBase64Encoded,reader.result];
        console.log(reader.result);
      };

    }

  }

  commentDescriptionChange(event){
    console.log(event);
    this.commentDescription = event.target.value;
    console.log(this.commentDescription);
    
  }
 

}
