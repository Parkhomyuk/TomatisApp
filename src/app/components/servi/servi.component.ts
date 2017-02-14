import { Component } from '@angular/core';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {BlogService} from "../service/blog.service";
import {service_content_main_rus} from '../content/service_content/service_content_main_rus';
import {service_content_main_heb} from '../content/service_content/service_content_main_heb';
import {SimpleChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnDestroy} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
@Component({
  selector: 'servi',
  templateUrl: './servi.component.html',

})
export class ServiComponent implements OnInit,OnChanges, OnDestroy{
  lang:any;
  content=service_content_main_rus;
  constructor(private blogservice: BlogService ){}
  ngOnInit():void {
    this.lang=this.blogservice.getLang();
    console.log('service lang '+this.lang);
    if(this.lang=='heb'){
      this.content=service_content_main_heb;

    }else{
      this.content=service_content_main_rus;
    }

  }

  ngOnChanges(changes:SimpleChanges):void {
    this.lang;
  }
  ngDoCheck(){
    this.lang;
    this.content;
    this.ngOnInit();
    console.log('service chenges');
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
