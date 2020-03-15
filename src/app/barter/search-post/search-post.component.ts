import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Post } from '../../models/post.model';
import { PostCrudService } from './../../services/post-crud.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  searchValue: string = "";
  postList = [];
  chh:string="";
  private postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  // @Input() result:string="";  
  // @Output() clicked=new EventEmitter<string>(); 



  constructor(public afs: AngularFirestore,public postcrud: PostCrudService) { }

  ngOnInit() {

    // this.postCollection=this.getByFilters(event);
    // console.log(this.postCollection);
    this.postcrud.currentSearch.subscribe(search =>this.chh=search);

  }

  search()
  {
    // console.log(this.searchValue);
    this.postcrud.searchChange(this.searchValue);
    console.log(this.chh);
  }

  // search() {
  //   // let q = event.target.value;
  //   console.log('jjjj');
  //   this.postCollection = this.afs.collection<Post>('posts', ref => {
  //     // Compose a query using multiple .where() methods
  //     return ref
  //     .where('title', '>=', this.searchValue)
  //     .where('title', '<=', this.searchValue+ '\uf8ff')
  //   });
  //   console.log(this.postCollection);
  //   this.posts = this.postCollection.valueChanges();
  //   this.posts.subscribe(posts=> this.postList.push(posts))
  //   console.log(this.postList);
  // }
}
