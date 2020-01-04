import { Injectable } from '@angular/core';
import { Post } from './../models/post.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  private postCollection: AngularFirestoreCollection<Post>;

  posts: Observable<Post[]>;

constructor(private afs: AngularFirestore) {
  this.postCollection = afs.collection<Post>('posts');
  this.posts = this.postCollection.valueChanges();
 }
 addPost(post: Post){
   this.postCollection.add(post);
 }

}
