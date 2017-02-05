import {Component, OnDestroy} from '@angular/core';

import {Blog} from '../content/blog_content/Blog';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {Coment} from "../content/blog_content/coment";
import {FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from "../service/firebase.service";

@Component({
  selector: 'blogsingle',
  templateUrl: './blogsingle.component.html',
  styleUrls: ['./blogsingle.component.css'],
  providers: [FirebaseService]
})
export class BlogsingleComponent implements OnInit,OnDestroy{

  error: any;
  email: any;
  photo: any;
  name: any;

  public id:number;
  private blog:Blog;
  private blogs:Blog[];
  private blogs2:Blog[];
  private date:number;
  private header:string;
  private image:string;
  private author:string;
  private content:string;
  private ncomments:number;
  private coments:Coment[];
  private hashtags:String[];
  private sub:any;



  /*constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService){

  }*/


  constructor(private activatedRoute: ActivatedRoute,private _firebaseService:FirebaseService, public af: AngularFire ) {

  this.af.auth.subscribe(auth => {
      if(auth) {
        console.log(auth.toString);
        console.log(auth);
        console.log(auth.auth.email);
        this.email=auth.auth.email;
        this.name=auth.auth.displayName;
        this.photo=auth.auth.photoURL;


      } else {

      }
    });

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
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);

            let a=document.getElementById('signup').hidden=true;
            let b=document.getElementById('sign').hidden=true;
            this.name=success.auth.email;
             this.photo=null;



        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }
  logout() {
    this.af.auth.logout();
    this.name="You are not registered member";
    console.log('logged out');

  }

  onEmail(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
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

  onregEmail(){
    let a=document.getElementById('regEmail').hidden=false;
    let b=document.getElementById('sign').hidden=true;

  }
  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.name=success.auth.displayName;
        this.photo=success.auth.photoURL;

      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.name=success.auth.displayName;
        this.photo=success.auth.photoURL;
      }).catch(
      (err) => {
        this.error = err;
      })
  }


  ngOnInit():void {

    this._firebaseService.getBu().subscribe(bu=>{
      this.blogs=bu;
      let f=this.id;
      let blog_single=this.blog;
      this.blogs.forEach(function(blog, i, blogs) {
        if(blog.id==f) {
          blog_single=blog;

        }

      });

      this.date= blog_single.date;
      this.header=blog_single.header;
      this.image=blog_single.image;
      this.author=blog_single.author;
      this.content=blog_single.content;
      this.ncomments=blog_single.ncomments;
      this.coments=blog_single.coment;
      this.hashtags=blog_single.hashtags;
    });

    this.sub= this.activatedRoute.params.subscribe(params=>this.id=+params['id']);





  }
  signup(){
    let a= document.getElementById('signup').hidden=false;
    let b= document.getElementById('sign').hidden=true;
  }

  goback(){
    let a= document.getElementById('signup').hidden=true;
    let b= document.getElementById('sign').hidden=false;
  }
  member(){

    let b= document.getElementById('member').hidden=false;
  }




  ngOnDestroy():void {
    this.sub.unsubscribe();

  }


}
