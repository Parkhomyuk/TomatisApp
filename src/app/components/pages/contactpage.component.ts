import { Component } from '@angular/core';
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnDestroy} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {SimpleChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {BlogService} from "../service/blog.service";

@Component({
  selector: 'contactpage',
  templateUrl: './contactpage.component.html',

})
export class ContactpageComponent implements OnInit,OnChanges, OnDestroy {

  lang:any;

  constructor(private blogservice: BlogService){}
  ngOnInit():void {

    this.lang=this.blogservice.getLang();
    console.log('about lang '+this.lang);

  }
  ngDoCheck(){
    this.lang;

    this.ngOnInit();
    console.log('contact chenges');
  }

  ngOnChanges(changes:SimpleChanges):void {
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
