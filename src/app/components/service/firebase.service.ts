import {Injectable} from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Blog} from "../content/blog_content/Blog";
import { AuthProviders, AuthMethods } from 'angularfire2';



@Injectable()
export class FirebaseService{
  bu: FirebaseListObservable<Blog[]>;
  tags: FirebaseListObservable<String[]>;
  items: FirebaseListObservable<any[]>;
  error:any;
  name:any;


  constructor(private _af:AngularFire){
    this._af.auth.subscribe(auth => {
      if(auth) {
        /* let a=document.getElementById('member').hidden=false;*/
        /* let b=document.getElementById('sign').hidden=true;
         let c=document.getElementById('signup').hidden=true;*/
        this.name=auth;
      }
    });


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

