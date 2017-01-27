import { Component,OnInit } from '@angular/core';
import {Blog} from '../content/blog_content/Blog';


import {Coment} from "../content/blog_content/coment";
import {FilterArrayPipe} from "../../filter.pipe";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from "../service/firebase.service";



@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',
  providers: [FirebaseService],

})
export class BlogpageComponent implements OnInit {
  bu: Blog[];
  blogs1:Blog[];
  blogs2:Blog[];


  arrPage:number[]=[0,6,12,18,24,30.36,42,48,54,60,66,72,78,84,90];
  constructor(private _firebaseService:FirebaseService) {

  }
  ngOnInit(){
    this._firebaseService.getBu().subscribe(bu=>{
      this.bu=bu;
      this.blogs1=bu;
      this.blogs2=bu;


  });


  }

  onSelectPage(a) {

    for (let i = 0; i < this.arrPage.length; i++) {

      if (a == i + 1) {

        this.bu = this.blogs1.slice(this.arrPage[i], this.arrPage[i + 1]);
      }


    }

  }

/*

 arrPage:number[]=[0,6,12,18,24,30.36,42,48,54,60,66,72,78,84,90];
  items: FirebaseListObservable<any[]>;
  constructor(private blogService: BlogService,af: AngularFire) {
    this.items = af.database.list('/blog');
  }




  blogs: Blog[]=this.blogService.getBlogs();
  blogs1: Blog[]=this.blogService.getBlogs();
  countC:number=0;
  headerShort:string;

  onSelectPage(a) {

    for(let i=0;i<this.arrPage.length;i++){
      if(a==i+1){

        this.blogs=this.blogService.getBlogs().slice(this.arrPage[i],this.arrPage[i+1]);
      }

    }

  }
  countComents() {
    for (let i = 0; i < this.blogs.length; i++) {
      let cc:number=0;
      for (let j = 0; j < this.blogs[i].coment.length; j++) {
        cc++;
      }
      this.blogs[i].ncoments=cc;
      cc=0;
    }

  }
   b=this.countComents();

  cutHeader(){
    for(let i=0;i<this.blogs1.length;i++){
      let str=this.blogs1[i].content.slice(0,130);
      this.blogs[i].content=str;
    }

    }


*/

}
