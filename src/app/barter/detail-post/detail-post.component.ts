import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// const googleicon = require('./../../icons/google-icon.svg');
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  // icon=googleicon;
  size:number=0;
  timestamp:string='';
  details={
    timestamp:0,
    title:"",
    description:"",
    pics:[],
    condition:'',
    user:{

    },
  }
  name:string=""
  constructor(private route:ActivatedRoute) { } 

  ngOnInit() {
    
    
    var cart={}
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    // this.details=cart[];
    console.log(cart)
    this.details.title=cart['title'];
    this.timestamp=this.route.snapshot.paramMap.get("timestamp");
    console.log(this.timestamp);
    this.details.description=cart['description']
    this.details.pics=cart['pics']
    this.details.user=cart['user']
    this.details.condition=cart['condition']
    // this.details.user.name=cart.user['name']
    // this.size=this.details.pics.length;
    console.log(this.details.user)
  }
  


}
