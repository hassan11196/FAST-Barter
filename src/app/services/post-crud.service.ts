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

 getPosts() {
  return this.posts;
  
}
//  GetStudent(id: string) {
//   this.posts = this.postCollection.doc<Post>('/posts/' + id);
//   return this.studentRef;
// }

// // Fetch Students List
// GetStudentsList() {
//   this.studentsRef = this.db.list('students-list');
//   return this.studentsRef;
// }  

}
