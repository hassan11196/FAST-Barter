import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostCrudService } from 'src/app/services/post-crud.service';
import { Observable } from 'rxjs';

// const googleicon = require('./../../icons/google-icon.svg');
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  // icon=googleicon;
  fetchPost$:Observable<any>;
  size:number=0;
  timestamp:string='';
  details={
    timestamp:0,
    title:"",
    description:"",
    pics:[],
    condition:'',
    user:{
      photoURL:'',
      displayName:''

    },
  }
  fetchedPost={}; 
  name:string="";
  constructor(private route:ActivatedRoute, public postcrud: PostCrudService) {
    
    // var postInfo = this.postcrud.getPostByTimeStamp(this.timestamp).subscribe(post=> {
    //   console.log(post);
    //   this.fetchedPost = post;
    // });
    // console.log(postInfo);
    
   } 

  ngOnInit() {
     
    console.log(this.fetchedPost);
    var cart={}
    console.log(this.fetchedPost);
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    // this.details=cart[];
    console.log(cart)
    this.details.title=cart['title'];
    this.timestamp=this.route.snapshot.paramMap.get("timestamp");
    console.log(this.timestamp);
    this.fetchedPost=this.postcrud.posts.subscribe((post2:any)=> {
      console.log(post2);
      for (let index = 0; index < post2.length; index++) {
        if(post2[index].timestamp['seconds'] == this.timestamp){
          console.log(post2[index]);
          this.details.description=post2[index]['description']
          this.details.pics=post2[index]['pics']
          this.details.user=post2[index]['user']
          this.details.condition=post2[index]['condition']
          return post2[index];
        }
        
      }
    });
    console.log(this.fetchedPost);
    // cart = this.postcrud.getPostByTimeStamp(this.timestamp);
    console.log(cart);
    
    // this.details.user.name=cart.user['name']
    // this.size=this.details.pics.length;
    console.log(this.details.user)
  }
  


}
