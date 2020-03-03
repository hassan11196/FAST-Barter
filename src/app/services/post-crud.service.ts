import { Injectable } from '@angular/core';
import { Post } from './../models/post.model';
import { Comment } from './../models/comment.model';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  private postCollection: AngularFirestoreCollection<Post>;
  private commentCollection: AngularFirestoreCollection<Comment>;

  posts: Observable<Post[]>;

constructor(private afs: AngularFirestore) {
  this.postCollection = afs.collection<Post>('posts');
  this.posts = this.postCollection.valueChanges();
 }
 addPost(post: Post){
   this.postCollection.add(post);
 }
 addComment(comment: Comment){
  this.commentCollection.add(comment);
}
}
