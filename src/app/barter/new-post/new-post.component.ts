import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postTitle = '';
  postDescription = '';

  constructor() { }

  ngOnInit() {
  }

  postTitleChange(event){
    console.log(event);
    this.postTitle = event.target.value;
  }
  postDescriptionChange(event){
    console.log(event);
    this.postDescription = event.target.value;
    console.log(this.postDescription);
  }

}
