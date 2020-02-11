import { Component, OnInit } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
import { AuthService } from './../../services/auth.service';
import { Post } from './../../models/post.model';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage' ;
import { Observable} from 'rxjs/Observable';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { timestamp,finalize,tap,map } from 'rxjs/operators';
import { from,combineLatest } from 'rxjs';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  
  
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;
  
  
  
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  //afStorage: AngularFireStorage;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  postTitle = '';
  postDescription = '';
  user = null;
  id = '';
  constructor(private postcrud: PostCrudService, auth:AuthService,public afStorage:AngularFirestore,public storage: AngularFireStorage) {
    auth.user$.subscribe( user => this.user = user);
    //this.afStorage=afStorage;
  }

  ngOnInit() {
    this.files = this.afStorage.collection('files').valueChanges();

   }
  postSave(event){
    console.log('Post');
    // const mid =document.getElementById('link').getAttribute('href')
    console.log(this.postcrud);
    let p:Post ={
      timestamp : new Date(),
      title: this.postTitle,
      description:this.postDescription,
      user : this.user,
      picId: null,

  
    }
  
    console.log('Hitting Firebase');
    this.postcrud.addPost(p);
  }
  upload(event){
    this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];

    for (const file of filelist) {

      const path = `files/${file.name}`;
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      const _percentage$ = task.percentageChanges();
      allPercentage.push(_percentage$);

      // create composed object with different information. ADAPT THIS ACCORDING YOUR NEED
      const uploadTrack = {
        fileName: file.name,
        percentage: _percentage$
      }

      // push each upload into the array
      this.uploads.push(uploadTrack);

      // for every upload do whatever you want in firestore with the uploaded file
      const _t = task.then((f) => {
        return f.ref.getDownloadURL().then((url) => {
          return this.afStorage.collection('files').add({
            name: f.metadata.name,
            url: url
          });
        })
      })

    }

    this.allPercentage = combineLatest(allPercentage)
      .pipe(
      map((percentages) => {
        let result = 0;
        for (const percentage of percentages) {
          result = result + percentage;
        }
        return result / percentages.length;
      }),
      tap(console.log)
      );

    // const id = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(id);
    // this.task = this.ref.put(event.target.files[0]);
    // this.uploadProgress = this.task.percentageChanges();
    // //https://stackoverflow.com/questions/50541836/property-downloadurl-does-not-exist-on-type-angularfireuploadtask
    // this.task.snapshotChanges().pipe(
    //   finalize(() => this.downloadURL = this.ref.getDownloadURL())
    //   )
    // .subscribe();
    
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
