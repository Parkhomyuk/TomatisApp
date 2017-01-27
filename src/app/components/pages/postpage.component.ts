import { Component } from '@angular/core';
import {Coment} from "../content/blog_content/coment";

import {Blog} from "../content/blog_content/Blog";
import {AngularFire} from "../../../../node_modules/angularfire2/angularfire2";
import {FirebaseService} from "../service/firebase.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";



@Component({
  selector: 'post',
  templateUrl: './postpage.component.html',
  providers: [FirebaseService]

})
export class PostPageComponent implements OnInit{
  bu:Blog[];
  id:number;
  date=Date.now();


  constructor(private _firebaseService:FirebaseService ) {

  }
  ngOnInit() {
    this._firebaseService.getBu().subscribe(blogs => {
      this.bu = blogs;
      this.id=this.bu.length+1;
    });

  }
  addPost(image:string, header:string,  content:string){

    var newBlogPost={
      id:this.id,
      date:this.date,
      image:image,
      button:'прочитать',
      header:header,
      author:'alex',
      content:content,



    }
       
    this._firebaseService.addPost(newBlogPost);
    console.log(newBlogPost);



  }


}
