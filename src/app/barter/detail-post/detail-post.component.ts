import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { AuthService } from './../../services/auth.service';
import { Observable} from 'rxjs/Observable';
import { PostCrudService } from './../../services/post-crud.service';
import { Comment } from './../../models/comment.model';


import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage' ;
const googleicon = require('./../../icons/google-icon.svg');
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  // icon=googleicon;
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


  commentDescription = '';
  user = null;
  id = '';
  post=null;
  constructor(public postcrud: PostCrudService,auth:AuthService,public afStorage:AngularFirestore,public storage: AngularFireStorage) { 
    auth.user$.subscribe( user => this.user = user);

  } 

  ngOnInit() {
    
    this.files = this.afStorage.collection('files').valueChanges();
    var cart={}
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    // this.details=cart[];
    console.log(cart)
    this.details.title=cart['title'];
    this.timestamp=this.route.snapshot.paramMap.get("timestamp");
    console.log(this.timestamp);
    this.details.description=cart['description']
    this.details.pics=cart['pics']
    this.details.user=cart['user']
    this.details.condition=cart['condition']
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
      user : this.user,
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
