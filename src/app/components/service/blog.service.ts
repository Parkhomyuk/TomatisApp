import {SERVICEPAGE} from "../content/service_page_1"
import {SERVICEPAGEHEB} from "../content/service_page_2"
import {Blog} from '../content/blog_content/Blog';
import {Injectable} from "../../../../node_modules/@angular/core/src/di/metadata";

@Injectable()
export class BlogService{
blogs:Blog[]=null;
page=SERVICEPAGE;
lang='rus';

  setLang(lang){
    this.lang=lang;
  }
  getLang(){
    return this.lang;
  }

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
