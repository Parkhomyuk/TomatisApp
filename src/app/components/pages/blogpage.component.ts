import { Component } from '@angular/core';
import {Blog} from '../content/blog_content/Blog';
import {BLOG} from '../content/blog_content/blog_content';
import {BlogService} from '../service/blog.service'
import {Coment} from "../content/blog_content/coment";
import {FilterArrayPipe} from "../../filter.pipe";



@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',
  providers: [BlogService],

})
export class BlogpageComponent {


 arrPage:number[]=[0,6,12,18,24,30.36,42,48,54,60,66,72,78,84,90];

  constructor(private blogService: BlogService) { }
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
 /* a=this.cutHeader();*/


}
