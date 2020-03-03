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
 getPostByTimeStamp(timeStamp: string){
  return this.posts.subscribe((post2:any)=> {
    console.log(post2);
    for (let index = 0; index < post2.length; index++) {
      if(post2[index].timestamp['seconds'] == timeStamp){
        console.log(post2[index]);
        return post2[index];
      }
      
    }
  });
  // return this.afs.doc<Post>(`/post/1`).valueChanges();
  // db.collection('books').where(FieldPath.documentId(), '==', '88ft3QNysSExne4u9hm9').get()
 }

}
