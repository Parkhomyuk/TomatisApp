import {Component, OnDestroy} from '@angular/core';

import {Blog} from '../content/blog_content/Blog';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {Coment} from "../content/blog_content/coment";
import {FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from "../service/firebase.service";
import {NgForm} from "../../../../node_modules/@angular/forms/src/directives/ng_form";
import {arCom} from "../content/blog_content/arCom";


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

  private key: number;
  private subscription: Subscription;
  private arc:arCom;
  public id:number;

  private blog:Blog;
  private blogs:Blog[];
  private bloggg:Blog;
  private date:number;
  private header:string;
  private image:string;
  private author:string;
  private content:string;
  private ncomments:number;
  private comments:Coment[];
  private comment:Coment;
  private hashtags:String[];
  private hashtags1:string;
  private hashtags2:string;
  private hashtags3:string;
  private hashtags4:string;
  private sub:any;

  /*Comment-values=====================*/
  idCom:number;
  dateComNow:number=Date.now();
  dateCom:number;
  currentDate:number;
  isBlog:boolean= false;







  constructor(private activatedRoute: ActivatedRoute,private _firebaseService:FirebaseService, public af: AngularFire ) {

  this.af.auth.subscribe(auth => {
      if(auth) {
        console.log(auth.toString);
        console.log(auth);
        console.log(auth.auth.email);
        this.email=auth.auth.email;
        this.name=auth.auth.displayName;
        this.photo=auth.auth.photoURL;


      }
    });
    this.subscription = activatedRoute.params.subscribe(params=>this.key=params['$key']);
  }

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
    console.log(this.key);


    this._firebaseService.getBu().subscribe(bu=>{
      this.blogs=bu;

      let f=this.id;
      let k=this.key;
      console.log('ckxmz,mc.zx'+"-"+f+"-"+k+" "+f);
      let blog_single=this.blog;
      this.blogs.forEach(function(blog, i, blogs) {
        if(blog.id==f) {
          blog_single=blog;

        }

      });

      this.bloggg=blog_single;
      this.date= blog_single.date;
      this.header=blog_single.header;
      this.image=blog_single.image;
      this.author=blog_single.author;
      this.content=blog_single.content;
      this.comments=blog_single.comments;
      this.hashtags=blog_single.hashtags;
      this.hashtags1=blog_single.hashtags1;
      this.hashtags2=blog_single.hashtags2;
      this.hashtags3=blog_single.hashtags3;
      this.hashtags4=blog_single.hashtags4;


      this.currentDate=new Date().getTime();
     if(blog_single.comments!=undefined){
       this.isBlog=true;
       this.ncomments=blog_single.comments.length;
       this.comments=blog_single.comments;
     }





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

  onSubmit1(form){
   /* this.comment.id=this.coments.length;*/
    let comment: Comment= (this.comment.date=this.dateComNow,
    this.comment.textcomment=form.textcomment,
    this.comment.author=this.name);
    /*this.comment.date=this.dateComNow;
    this.comment.textcomment=formData;
    this.comment.author=this.name;*/


  }
  onComment(event:Event,comment:string){
   event.preventDefault();
    let dateCom=Date.now();
    let comment1= new Coment(dateCom,comment,this.name);

    this.bloggg.comments;
    this.bloggg.comments.push(comment1);

    let comments:Coment[]=this.bloggg.comments;
    this.arc= new arCom(comments);




    console.log(this.key);
    console.log(this.bloggg);
    console.log(this.bloggg.comments[0]+'lllllllllllllllllllll');
    this._firebaseService.updatePostComment(this.key,this.arc);


/*this.blog.comments.push(comment);
    console.log(comment.author+" "+comment.date+""+comment.textcomment+(this.id-1)+" pochemu" );*/

    console.log(this.bloggg);
    console.log(this.blogs.keys().toString);
    console.log(this.currentDate);
  }


  ngOnDestroy():void {
    this.sub.unsubscribe();
    this.subscription.unsubscribe();
  }


}
