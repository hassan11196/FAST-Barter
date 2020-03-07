import { Injectable } from '@angular/core';
import { Post } from './../models/post.model';
import { Comment } from './../models/comment.model';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  private postCollection: AngularFirestoreCollection<Post>;
  private commentCollection: AngularFirestoreCollection<Comment>;

  posts: Observable<Post[]>;
  comments:Observable<Comment[]>;

constructor(private afs: AngularFirestore) {
  this.postCollection = afs.collection<Post>('posts');
  this.posts = this.postCollection.valueChanges();
  this.commentCollection = afs.collection<Comment>('comments');
  this.comments = this.commentCollection.valueChanges();
 }
 addPost(post: Post){
   this.postCollection.add(post);
 }
 addComment(comments: Comment){
  this.commentCollection.add(comments);
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


 getPostByUser(user: User){

  return this.posts.subscribe((post2:any)=> {
    console.log(post2);
    let posts_arr = [];
    for (let index = 0; index < post2.length; index++) {
      if(post2[index].user.uid == user.uid){
        console.log(post2[index]);
        posts_arr.push(post2[index]);
      }

    }
    return posts_arr;
    });
}


}
