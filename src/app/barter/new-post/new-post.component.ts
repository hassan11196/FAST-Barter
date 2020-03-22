import { Component, OnInit, Input } from '@angular/core';
import { PostCrudService } from './../../services/post-crud.service';
import { AuthService } from './../../services/auth.service';
import { Post } from './../../models/post.model';
import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask} from '@angular/fire/storage' ;
import { Observable} from 'rxjs/Observable';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { timestamp,finalize,tap,map } from 'rxjs/operators';
import { from,combineLatest } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare const require:any;

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '200px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  uploads: any[] = [];
  allPercentage: Observable<any>;
  files: Observable<any>;
  picsBase64Encoded: any[] = [];

  // name = new FormControl('');
  htmlContent='';
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  //afStorage: AngularFireStorage;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask;
  postTitle = '';
  postDescription = '';
  user = null;
  id = '';
  return_item='';
  condition='';
  state='';
  city='';
  phone="";
  type="";
  $key:any;
  showCondition=true;
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
    // console.log(this.htmlContent);
    let p:Post ={
      timestamp : new Date(),
      title: this.postTitle,
      description:this.postDescription,
      user : this.user,
      pics: this.picsBase64Encoded,
      return_item: this.return_item,
      condition: this.condition,
      comment:[],
      // $key:this.$key,
      state:this.state,
      city:this.city,
    }

    console.log('Hitting Firebase');
    this.postcrud.addPost(p);
    // Router.navigate(['/home']);
  }
  upload(event){
    this.uploads = [...this.uploads,...event.target.files];
    console.log(this.uploads);

    const filelist = event.target.files;
    const reader = new FileReader();

    // const allPercentage: Observable<number>[] = [];

    for (const file of filelist) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.picsBase64Encoded = [... this.picsBase64Encoded,reader.result];
        console.log(reader.result);
      };

    //   const path = `files/${file.name}`;
    //   const ref = this.storage.ref(path);
    //   const task = this.storage.upload(path, file);
    //   const _percentage$ = task.percentageChanges();
    //   allPercentage.push(_percentage$);

    //   // create composed object with different information. ADAPT THIS ACCORDING YOUR NEED
    //   const uploadTrack = {
    //     fileName: file.name,
    //     percentage: _percentage$
    //  }

    //   // push each upload into the array
    //   this.uploads.push(uploadTrack);

    //   // for every upload do whatever you want in firestore with the uploaded file
    //   const _t = task.then((f) => {
    //     return f.ref.getDownloadURL().then((url) => {
    //       return this.afStorage.collection('files').add({
    //         name: f.metadata.name,
    //         url: url
    //       });
    //     })
    //   })

    }

    // this.allPercentage = combineLatest(allPercentage)
    //   .pipe(
    //   map((percentages) => {
    //     let result = 0;
    //     for (const percentage of percentages) {
    //       result = result + percentage;
    //     }
    //     return result / percentages.length;
    //   }),
    //   tap(console.log)
    //   );

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
  // postDescriptionChange(event){
  //   console.log(event);
  //   this.postDescription = event.target.value;
  //   console.log(this.postDescription);
  // }
  postConditionChange(event,val){
    console.log(event);
    console.log(val);
    if (val==0)
    this.condition = 'New';
    else
    this.condition = 'Used';
    console.log(this.condition);
  }
  postStateChange(event){
    console.log(event);
    this.state = event.target.value;
    console.log(this.state);
  }
  postcityChange(event){
    console.log(event);
    this.city = event.target.value;
    console.log(this.city);
  }
  userPhoneChange(event){
    console.log(event);
    this.phone = event.target.value;
    console.log(this.phone);
  }
  postTypeChange(event,name){
    console.log(event);
    this.type = name;
    console.log(this.type);
    if(this.type==='service'){
      this.showCondition=false;
      this.condition='Not Applicable'
    }
    else{
      this.showCondition=true;
    }
  }
}
