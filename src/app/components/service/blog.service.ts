import {BLOG} from '../content/blog_content/blog_content';
import {Blog} from '../content/blog_content/Blog';
import {Injectable} from "../../../../node_modules/@angular/core/src/di/metadata";

@Injectable()
export class BlogService{
blogs:Blog[]=BLOG;

  getBlogs(){

      return this.blogs;
  }
  getSingleBlog(id:number){
    for(let i=0;i<this.blogs.length;i++){
      if(id==this.blogs[i].id)
      return this.blogs[i];
    }
  }


  }
