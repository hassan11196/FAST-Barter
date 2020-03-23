import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { PostCrudService } from "./../../services/post-crud.service";
import { AuthService } from "./../../services/auth.service";
import { Post } from "./../../models/post.model";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
// import {moment} from '@moment.js';
@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  uploads = [];
  uploadProgress;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "200px",
    minHeight: "0",
    maxHeight: "auto",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
    placeholder: "Enter text here...",
    defaultParagraphSeparator: "",
    defaultFontName: "",
    defaultFontSize: "",
    fonts: [
      { class: "arial", name: "Arial" },
      { class: "times-new-roman", name: "Times New Roman" },
      { class: "calibri", name: "Calibri" },
      { class: "comic-sans-ms", name: "Comic Sans MS" }
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ],
    uploadUrl: "v1/image",
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: "top",
    toolbarHiddenButtons: [["bold", "italic"], ["fontSize"]]
  };
  showCondition = true;
  postTitle = "";
  postDescription = "";
  user = null;
  id = "";
  return_item = "";
  condition = "";
  state = "";
  city = "";
  phone = "";
  type = "";
  $key:any;
  cart: any;
  details = {
    timestamp: "",
    title: "",
    description: "",
    pics: [],
    condition: "",
    user: {
      photoURL: "",
      displayName: ""
    },
    id:""
  };
  constructor(
    private postcrud: PostCrudService,
    auth: AuthService,
    public afStorage: AngularFirestore,
    public storage: AngularFireStorage
  ) {
    auth.user$.subscribe(user => (this.user = user));
  }

  ngOnInit() {
    this.cart = {};
    this.details = JSON.parse(localStorage.getItem("detailPost"));
    // this.details.title = cart["title"];
    // this.details.description = cart["description"];
    // this.details.pics = cart["pics"];
    // this.details.user = cart["user"];
    // this.details.condition = cart["condition"];
    // this.details.timestamp = cart["timestamp"];
    // this.details.id = cart['id'];
    console.log(this.details.id);
    // console.log(new Date())
    // var d= new Date()
    // d.setDate(this.details.timestamp['nanoseconds'])
    // console.log(d)
  }
  postTitleChange(event) {
    console.log(event.target.value);
    this.postTitle = event.target.value;
    this.details.title = event.target.value;
  }
  postConditionChange(event, val) {
    console.log(event);
    console.log(val);
    if (val == 0) this.condition = "New";
    else this.condition = "Used";
    console.log(this.condition);
  }
  postStateChange(event) {
    console.log(event.target.value);
    this.state = event.target.value;
    console.log(this.state);
  }
  postcityChange(event) {
    console.log(event.target.value);
    this.city = event.target.value;
    console.log(this.city);
  }
  userPhoneChange(event) {
    console.log(event);
    this.phone = event.target.value;
    console.log(this.phone);
  }
  postTypeChange(event, name) {
    console.log(event);
    this.type = name;
    console.log(this.type);
    if (this.type === "service") {
      this.showCondition = false;
      this.condition = "Not Applicable";
    } else {
      this.showCondition = true;
    }
  }
  editPost(event) {
    console.log("Post");
    console.log(this.postcrud);

    // let p: any = {
    //   title: this.postTitle,
    //   description: this.postDescription,
    //   user: this.user,
    //   pics: [],
    //   return_item: this.return_item,
    //   condition: this.condition,
    //   comment: [],
    //   id: this.details.id,
    // };


    console.log("Hitting Firebase");

    this.postcrud.updatePost(this.details.id, this.details);
  }
}
