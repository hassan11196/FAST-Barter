import { Component, OnInit } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
import { AuthService } from './../../services/auth.service';
import { Post } from './../../models/post.model';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from 'angularfire2/storage' ;
import { Observable} from 'rxjs/Observable';

import { timestamp,finalize } from 'rxjs/operators';
import { from } from 'rxjs';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  afStorage: AngularFireStorage;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  postTitle = '';
  postDescription = '';
  user = null;
  id = '';
  constructor(private postcrud: PostCrudService, auth:AuthService, afStorage:AngularFireStorage) {
    auth.user$.subscribe( user => this.user = user);
    this.afStorage=afStorage;
  }

  ngOnInit() {
   }
  postSave(event){
    console.log('Post');
    const mid =document.getElementById('link').getAttribute('href')
    console.log(this.postcrud);
        let p:Post ={
      timestamp : new Date(),
      title: this.postTitle,
      description:this.postDescription,
      user : this.user,
      picId: mid,

  
    }
  
    console.log('Hitting Firebase');
    this.postcrud.addPost(p);
  }
  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    //https://stackoverflow.com/questions/50541836/property-downloadurl-does-not-exist-on-type-angularfireuploadtask
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL())
      )
    .subscribe();
    
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
