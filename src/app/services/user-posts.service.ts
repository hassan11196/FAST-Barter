import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from '../models/post.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {

  public postCollection: AngularFirestoreCollection<Post>;
  public user$: Observable<User>;
  public user : User;
  public user_posts: Observable<Post[]>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {


          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

    this.user$.subscribe(event => {
      this.user=event;


    });
    this.postCollection = afs.collection<Post>('posts');
    this.user_posts = this.postCollection.valueChanges();
    // this.postCollection = afs.collection<Post>('posts', ref => ref.where('user.uid', '==', this.user.uid));
  }

  get_posts(){
    return this.postCollection;
  }

}
