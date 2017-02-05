import { Component } from '@angular/core';
import {FirebaseService} from "../service/firebase.service";
import {Blog} from "../content/blog_content/Blog";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [FirebaseService],
})
export class BlogComponent implements OnInit {
  blogs:Blog[];


  constructor(private _firebaseService:FirebaseService) {}
  ngOnInit(){
    this._firebaseService.getBu().subscribe(blogs=>{

      this.blogs=blogs;
      console.log(blogs.length);



    });


  }


}
