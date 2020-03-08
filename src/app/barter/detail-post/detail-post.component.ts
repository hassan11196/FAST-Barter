import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PostCrudService } from 'src/app/services/post-crud.service';
import { Observable } from 'rxjs';
import { Comment } from './../../models/comment.model';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage' ;
declare const require:any;
// const googleicon = require('./../../icons/google-icon.svg');
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  // icon=googleicon;
  fetchPost$:Observable<any>;
  size:number=0;
  timestamp:string='';

  details={
    timestamp:0,
    title:"",
    description:"",
    pics:[],
    condition:'',
    user:{

    },
  }
  name:string=""
  uploads: any[] = [];
   allPercentage: Observable<any>;
   files: Observable<any>;
   picsBase64Encoded: any[] = [];


   downloadURL: Observable<string>;
   uploadProgress: Observable<number>;
   //afStorage: AngularFireStorage;
   ref:AngularFireStorageReference;
   task:AngularFireUploadTask;

  user=null;
  commentDescription = '';
  comments_user = null;
  id = '';
  post=null;
  fetchedPost={};
  // name:string="";
  constructor(private route:ActivatedRoute, public postcrud: PostCrudService,auth:AuthService,public afStorage:AngularFirestore,public storage: AngularFireStorage) {
    auth.user$.subscribe( user => this.user = user);
    // var postInfo = this.postcrud.getPostByTimeStamp(this.timestamp).subscribe(post=> {
    //   console.log(post);
    //   this.fetchedPost = post;
    // });
    // console.log(postInfo);

   }

  ngOnInit() {

    console.log(this.fetchedPost);
    var cart={}
    console.log("fetch")
    console.log(this.fetchedPost);
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    // this.details=cart[];
    console.log(cart)
    this.details.title=cart['title'];
    this.details.description=cart['description'];
    this.details.pics=cart['pics'];
    this.details.user=cart['user'];
    this.timestamp=this.route.snapshot.paramMap.get("timestamp");
    console.log(this.timestamp);
    this.fetchedPost=this.postcrud.posts.subscribe((post2:any)=> {
      console.log(post2);
      for (let index = 0; index < post2.length; index++) {
        if(post2[index].timestamp['seconds'] == this.timestamp){
          console.log(post2[index]);
          console.log("Ahsan")
          this.details.description=post2[index]['description']
          this.details.pics=post2[index]['pics']
          this.details.user=post2[index]['user']
          this.details.condition=post2[index]['condition']
          return post2[index];
         }

      }
    });
    console.log(this.fetchedPost);
    // cart = this.postcrud.getPostByTimeStamp(this.timestamp);
    console.log(cart);

    // this.details.user.name=cart.user['name']
    // this.size=this.details.pics.length;
    console.log(this.details.user)
  }
  commentSave(event){
    console.log('Post');
    // const mid =document.getElementById('link').getAttribute('href')
    console.log(this.postcrud);
    let p:Comment ={
      timestamp : new Date(),
      description:this.commentDescription,
      comments_user: this.user,
      pics: this.picsBase64Encoded,

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
