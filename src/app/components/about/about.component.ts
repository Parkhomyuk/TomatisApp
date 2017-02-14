import { Component } from '@angular/core';
import {about_language_rus} from '../content/about_content/about_content_rus';
import {about_language_heb} from '../content/about_content/about_content_heb';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {SimpleChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

import {BlogService} from "../service/blog.service";

import {OnDestroy} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";


@Component({
  selector: 'about',
  templateUrl: './about.component.html'

})
export class AboutComponent   implements OnInit,OnChanges, OnDestroy{


  lang:any;
  content=about_language_rus;
  constructor(private blogservice: BlogService){}
  ngOnInit():void {
    this.lang=this.blogservice.getLang();
    console.log('about lang '+this.lang);
    if(this.lang=='heb'){
      this.content=about_language_heb;
      let a=document.getElementById('ptom').style.right;
    }else{
      this.content=about_language_rus;
    }


  }
  ngOnChanges(changes:SimpleChanges):void {
    this.lang;
  }
  ngDoCheck(){
    this.lang;
    this.content;
    this.ngOnInit();
    console.log('about chenges');
  }
  ngAfterContentChecked() {
    // Component content has been Checked
    console.log('Component content has been Checked');
  }
  ngAfterViewInit() {
    // Component views are initialized
    console.log('Component views are initialized');
  }
  ngAfterViewChecked() {
    // Component views have been checked
    console.log(' Component views have been checked');
  }
  ngOnDestroy():void {


  }


}
