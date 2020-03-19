import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import {AuthService} from './../../services/auth.service'
import { Subject } from 'rxjs/Subject';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs/Rx';
import { PostCrudService } from './../../services/post-crud.service';


// import { userInfo } from 'os';
declare let require:any;

const fasticon=require('./../../icons/fast.jpg');
@Component({
  selector: 'app-barter-layout',
  templateUrl: './barter-layout.component.html',
  styleUrls: ['./barter-layout.component.css']
})
export class BarterLayoutComponent implements OnInit {
  title = 'FastBarter';
  ficon=fasticon;
  name ;
  searchValue: string = "";
  chhh:string="";
  postList=[];
  private postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
 

  constructor(public auth: AuthService,public afs: AngularFirestore,public postcrud: PostCrudService) {
    auth.user$.subscribe(event => this.name=event);

  }



  ngOnInit() {
    this.postcrud.currentSearch.subscribe(search =>this.searchValue=search);


  }


 



}
