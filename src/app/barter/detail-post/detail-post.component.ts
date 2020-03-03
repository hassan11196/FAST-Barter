import { Component, OnInit } from '@angular/core';

// const googleicon = require('./../../icons/google-icon.svg');
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  // icon=googleicon;
  size:number=0;
  details={
    title:"",
    description:"",
    pics:[],
    condition:'',
    user:{

    },
  }
  name:string=""
  constructor() { } 

  ngOnInit() {
    
    
    var cart={}
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    // this.details=cart[];
    console.log(cart)
    this.details.title=cart['title']
    this.details.description=cart['description']
    this.details.pics=cart['pics']
    this.details.user=cart['user']
    this.details.condition=cart['condition']
    // this.details.user.name=cart.user['name']
    // this.size=this.details.pics.length;
    console.log(this.details.user)
  }
  


}
