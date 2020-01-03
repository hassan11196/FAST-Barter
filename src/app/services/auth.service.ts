import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;


  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router)
     {
       // Get the auth state, then fetch the Firestore user document or return null
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
     }



     async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(credential);
      if (credential !== null){
        this.router.navigate(['/home']);
      }

      return this.updateUserData(credential.user);
    }
  
    private updateUserData(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      
      console.log(' this is users udpate user data');
      console.log(user);


      const data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL
      } 
  
      return userRef.set(data, { merge: true })
  
    }
  
    async signOut() {
      await this.afAuth.auth.signOut();
      console.log('Signin Out');
      this.router.navigate(['/login']);
    }

    get authenticated(): boolean{
      console.log(
        this.afAuth.authState
      );
      return this.afAuth !== null;
    }
}
