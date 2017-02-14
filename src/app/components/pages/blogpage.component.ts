import { Component,OnInit } from '@angular/core';
import {Blog} from '../content/blog_content/Blog';

import { AuthProviders, AuthMethods } from 'angularfire2';
import {Coment} from "../content/blog_content/coment";
import {FilterArrayPipe} from "../../filter.pipe";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from "../service/firebase.service";
import {OnChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnDestroy} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {SimpleChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";



@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',
  providers: [FirebaseService],

})
export class BlogpageComponent implements OnInit,OnChanges, OnDestroy {

  bu: Blog[];
  blogs1:Blog[];
  blogs2:Blog[];
 flag:any=null;
  tags:any;
  email: any;
  filter:any;

  arrPage:number[]=[0,6,12,18,24,30.36,42,48,54,60,66,72,78,84,90];
  constructor(private _firebaseService:FirebaseService, public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if(auth) {

        this.email=auth.auth.email;
        console.log(auth.auth.email);


      }
    });
  }





  ngOnInit(){
    this._firebaseService.getBu().subscribe(bu=>{
      this.bu=bu;
      this.blogs1=bu;
      this.blogs2=bu;


  });
    this._firebaseService.getTags().subscribe(tags=> {
      this.tags = tags;
    });


  }

  onSelectPage(a) {

    for (let i = 0; i < this.arrPage.length; i++) {

      if (a == i + 1) {

        this.bu = this.blogs1.slice(this.arrPage[i], this.arrPage[i + 1]);
      }


    }

  }

  filterTag(tag){
    /*this._firebaseService.getTags().subscribe(tags => {
      this.tags = tags;
    });*/
    this.filter=tag;
    console.log(this.filter+"==filter");
    console.log(tag+"==filter");
  }
  hashtagFilter(tag){

     this.flag=tag;

    /*this._firebaseService.getBlogTag().subscribe(bu => {
      this.bu = bu;
    });*/
console.log(this.flag);
  }


  ngDoCheck(){
    this.filter;


    console.log('filter chenges == '+this.filter);
  }

  ngOnChanges(changes:SimpleChanges):void {
    let chng = changes;

  }
  ngAfterContentChecked() {
    // Component content has been Checked

  }
  ngAfterViewInit() {
    // Component views are initialized

  }
  ngAfterViewChecked() {
    // Component views have been checked

  }
  ngOnDestroy():void {


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
