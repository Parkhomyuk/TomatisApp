import { Component } from '@angular/core';
import {Coment} from "../content/blog_content/coment";

import {Blog} from "../content/blog_content/Blog";
import {AngularFire} from "../../../../node_modules/angularfire2/angularfire2";
import {FirebaseService} from "../service/firebase.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";





@Component({
  selector: 'post',
  templateUrl: './postpage.component.html',
  providers: [FirebaseService]

})
export class PostPageComponent implements OnInit{
  bu:Blog[];
  tags:any;
  id:number;
  date=Date.now();
  hashT:any;
  at:any;

  constructor(private _firebaseService:FirebaseService,public af: AngularFire) {

  }
  ngOnInit() {
this.at=null;
    this._firebaseService.getBu().subscribe(bu=>{
      this.bu=bu;



    });
    this._firebaseService.getTags().subscribe(tags=>{
      this.tags=tags;
    this.id=Date.now();


    });
    /*this._firebaseService.getBu().subscribe(blogs => {
      this.bu = blogs;
      //this.id=this.bu.length+1;
      this.id=Date.now();

    });

    this._firebaseService.getTags().subscribe(hashtag=>{
      /!*this.tags=hashtag;
      this.at=hashtag.values();

      console.log(this.at.length+" length");
      console.log(this.tags.length+" length");
      console.log(this.tags+" tags");
      console.log(this.at+" at");*!/


      this.at=hashtag;

    });*/


  }
  addPost(image:string, header:string,  content:string, hashtag1:string,hashtag2:string,hashtag3:string, hashtag4:string){

    var newBlogPost={
      id:this.id,
      date:this.date,
      image:'img/serv/'+image,
      button:'прочитать',
      header:header,
      author:'NILONA',
      content:content,
      hashtags:[hashtag1,hashtag2,hashtag3,hashtag4],
      hashtags1:hashtag1,
      hashtags2:hashtag2,
      hashtags3:hashtag3,
      hashtags4:hashtag4,
      comments:Coment[0]=[{date:0,tetxtcomment:'',author:""}]



    }


     /*for(let i=0;i<this.tags.length;i++){
       for(let a=0;a<newBlogPost.hashtags.length;a++){
            if(newBlogPost.hashtags[a]==this.tags[i]){
              a++;
              console.log(newBlogPost.hashtags[a]+'noo'+" "+this.tags[i]);
            }else{
             console.log(newBlogPost.hashtags[a]+'yess'+" "+this.tags[i]);
            }

          }
      }*/
    let i=0;
    let f:any[]=[0,1,2];


    this.tags.forEach(tag=>{console.log(tag.$value)

    f[i]=tag.$value;
      i++;
     // console.log(tag.$value);
      console.log(f[i]);
      console.log(f);

    })
    for (let r = 0; r < newBlogPost.hashtags.length; r++) {
      let flag=0;
      for(let g=0;g<f.length;g++) {

    if (newBlogPost.hashtags[r]==f[g]) {
      flag=1;
    }

    //this._firebaseService.addTag(f[g]);
  }
      if(flag==0){
        this._firebaseService.addTag(newBlogPost.hashtags[r]);
      }
}

    this._firebaseService.addPost(newBlogPost);
   //this._firebaseService.addTag(this.at);

  //    this._firebaseService.addTag(f[2]);



  }


}
