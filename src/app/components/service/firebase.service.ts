import {Injectable} from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Blog} from "../content/blog_content/Blog";

import { AuthProviders, AuthMethods } from 'angularfire2';
import {HashTags} from "../content/blog_content/HashTags";



@Injectable()
export class FirebaseService{
  bu: FirebaseListObservable<Blog[]>;
  filter1: FirebaseListObservable<Blog[]>;
  filter2: FirebaseListObservable<Blog[]>;

  tags: FirebaseListObservable<string[]>;
 items: FirebaseListObservable<any[]>;
  error:any;
  name:any;
  dom:any;
  blog:Blog;
  i:number;


  constructor(private _af:AngularFire){
    this._af.auth.subscribe(auth => {
      if(auth) {
        /* let a=document.getElementById('member').hidden=false;*/
        /* let b=document.getElementById('sign').hidden=true;
         let c=document.getElementById('signup').hidden=true;*/
        this.name=auth;
      }
    });
this.dom=_af.database.list('/hashtags',{ preserveSnapshot: true });


  }


getBu(){
  this.bu= this._af.database.list('/blog') as FirebaseListObservable<Blog[]>

  return this.bu;
}
  getTags(){

    this.tags= this._af.database.list('/hashtags') as FirebaseListObservable<string[]>
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



    return  this.tags.push(newHashTags);


}
  updatePostComment(key, updComment){

   /* return this.bu.update(key, updComment);*/
   return this.bu.update(key, updComment);

  }



    getBlogTag(){
      /*if(tag != null){

        this.filter1 = this._af.database.list('/blog', {
          query: {
            orderByChild: 'hashtags1',
            equalTo: tag
          }

        });

        this.filter2= this._af.database.list('/blog', {
          query: {
            orderByChild: 'hashtags2',
            equalTo: tag
          }

        });

       )



                } else {*/
        this.bu = this._af.database.list('/blog') as
          FirebaseListObservable<Blog[]>


      return this.bu;
    }


  addComment(newComment,id){
  /*  this.bu= this._af.database.list('/blog')
    //return this.bu[id].comments.push(newComment);
    this.bu= this._af.database.list('/blog') as FirebaseListObservable<Blog[]>
    console.log(this.bu+'xzXzXz');*/


  }
  /*addNewComment(post,newComment){
    return this.bu..push(post.comments.newComment);

  }*/
  /*onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this._af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);

          let a=document.getElementById('signup').hidden=true;
          let b=document.getElementById('sign').hidden=true;
          this.name=success.auth.email;



        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }*/
/*
  logout() {
    this._af.auth.logout();
    this.name="You are not registered member";
    console.log('logged out');
    let a=document.getElementById('member').hidden=true;
    let b=document.getElementById('sign').hidden=false;
  }

  onEmail(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this._af.auth.login({
          email: formData.value.email,
          password: formData.value.password
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
        (success) => {
          console.log(success);

        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }
*/


}

