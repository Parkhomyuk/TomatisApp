import {Component, OnDestroy} from '@angular/core';
import {BlogService} from '../service/blog.service'
import {Blog} from '../content/blog_content/Blog';
import {BLOG} from '../content/blog_content/blog_content';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {Coment} from "../content/blog_content/coment";

@Component({
  selector: 'blogsingle',
  templateUrl: './blogsingle.component.html',
  providers: [BlogService]
})
export class BlogsingleComponent implements OnInit,OnDestroy{

  public id:number;
  private blog:Blog;
  private date:string;
  private header:string;
  private image:string;
  private author:string;
  private content:string;
  private ncoments:number;
  private coments:Coment[];
  private sub:any;



  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService){

  }
  ngOnInit():void {
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

  }



}
