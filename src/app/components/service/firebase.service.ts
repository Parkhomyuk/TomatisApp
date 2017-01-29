import {Injectable} from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Blog} from "../content/blog_content/Blog";




@Injectable()
export class FirebaseService{
  bu: FirebaseListObservable<Blog[]>;
  tags: FirebaseListObservable<String[]>;
  items: FirebaseListObservable<any[]>;



  constructor(private _af:AngularFire){

  }


getBu(){
  this.bu= this._af.database.list('/blog') as FirebaseListObservable<Blog[]>

  return this.bu;
}
  getTags(){

    this.tags= this._af.database.list('/hashtag') as FirebaseListObservable<String[]>
    return this.tags;
  }



  getBus(){
    let items= this._af.database.list('/blog');
    items.forEach(i=>i.forEach(e=>(console.log(e.name))));
  }

  addPost(newPostBlog){
    return  this.bu.push(newPostBlog);
  }
  addTag(newHashTags){


}
}

