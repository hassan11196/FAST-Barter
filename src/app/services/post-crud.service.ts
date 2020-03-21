import { Injectable } from '@angular/core';
import { Post } from './../models/post.model';
import { Comment } from './../models/comment.model';

import {AngularFireList, AngularFireDatabase} from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  private postCollection: AngularFirestoreCollection<Post>;
  private postList$ : AngularFireList<any[]>;
  private commentCollection: AngularFirestoreCollection<Comment>;
  private search=new BehaviorSubject<string>('');
  currentSearch=this.search.asObservable();
  posts: Observable<Post[]>;
  comments:Observable<Comment[]>;

constructor(private afs: AngularFirestore, private afd:AngularFireDatabase) {
  this.postCollection = afs.collection<Post>('posts');
  this.posts = this.postCollection.valueChanges();
  this.commentCollection = afs.collection<Comment>('comments');
  this.comments = this.commentCollection.valueChanges();
  this.postList$ = afd.list('posts');

 }
 getPostList(){
   return  this.afs.collection<any>('posts').stateChanges();
 }

 addPost(post: Post){
   this.postCollection.add(post);
 }
 addComment(comments: Comment){
  this.commentCollection.add(comments);
}

searchChange(search:string)
{
  this.search.next(search);

}
searchPost(searchValue)
{
  console.log(searchValue);

  // let q = event.target.value;
  console.log('jjjj');
  this.postCollection = this.afs.collection<Post>('posts', ref => {
    // Compose a query using multiple .where() methods
    return ref
    .where('title', '>=', searchValue)
    .where('title', '<=', searchValue+ '\uf8ff')
  });
  console.log(this.postCollection);
  this.posts = this.postCollection.valueChanges();
  return this.posts;
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
  this.postCollection = this.afs.collection<Post>('posts');
  this.posts = this.postCollection.valueChanges();
  console.log(this.posts);
  return this.posts;

}
getComments(id) {
  console.log("Im IN "+ id);
  this.commentCollection = this.afs.collection<Comment>('comments',ref => ref.where('parent', '==', id ));
  this.comments = this.commentCollection.valueChanges();
  return this.comments;
}
updatePost(id, value){
  let status = this.afs.collection('posts').doc(id).update(value);
  console.log(status);
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
