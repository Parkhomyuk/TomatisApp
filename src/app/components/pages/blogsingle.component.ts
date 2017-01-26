import {Component, OnDestroy} from '@angular/core';
import {BlogService} from '../service/blog.service'
import {Blog} from '../content/blog_content/Blog';
import {BLOG} from '../content/blog_content/blog_content';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {Coment} from "../content/blog_content/coment";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from "../service/firebase.service";
@Component({
  selector: 'blogsingle',
  templateUrl: './blogsingle.component.html',
  providers: [BlogService, FirebaseService]
})
export class BlogsingleComponent implements OnInit,OnDestroy{


  public id:number;
  private blog:Blog;
  private blogs:Blog[];
  private blogs2:Blog[];
  private date:number;
  private header:string;
  private image:string;
  private author:string;
  private content:string;
  private ncoments:number;
  private coments:Coment[];
  private sub:any;



  /*constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService){

  }*/


  constructor(private activatedRoute: ActivatedRoute,private _firebaseService:FirebaseService ) {

  }
 /* ngOnInit():void {
   this.sub= this.activatedRoute.params.subscribe(params=>this.id=+params['id']);
    this.blog=this.blogService.getSingleBlog(this.id);

    this.date=this.blog.date;
    this.header=this.blog.header;
    this.image=this.blog.image;
    this.author=this.blog.author;
    this.content=this.blog.content;
    this.ncoments=this.blog.ncoments;
    this.coments=this.blog.coment;
  }


  ngOnDestroy():void {
    this.sub.unsubscribe();

  }*/

  ngOnInit():void {

    this._firebaseService.getBu().subscribe(bu=>{
      this.blogs=bu;
      let f=this.id;
      let blog_single=this.blog;
      this.blogs.forEach(function(blog, i, blogs) {
        if(blog.id==f) {
          blog_single=blog;
          console.log('Prizz '+f);
        }

      });

      this.date= blog_single.date;
      this.header=blog_single.header;
      this.image=blog_single.image;
      this.author=blog_single.author;
      this.content=blog_single.content;
      this.ncoments=blog_single.ncoments;
      this.coments=blog_single.coment;
    });
    this.sub= this.activatedRoute.params.subscribe(params=>this.id=+params['id']);
    console.log(this.id+"jjj");



  }
  ngOnDestroy():void {
    this.sub.unsubscribe();
  }


}
