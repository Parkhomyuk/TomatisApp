import { Component } from '@angular/core';
import {SERVICEPAGE} from "../content/service_page_1";
import {SERVICEPAGEHEB} from "../content/service_page_2";
import {ServicePage} from "../content/servicePage";
import {Paragraph2} from "../content/paragraph2";
import {BlogService} from "../service/blog.service";
import {OnInit} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {OnChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";
import {SimpleChanges} from "../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";



@Component({
  selector: 'servicepage',
  templateUrl: './servicepage.component.html',


})
export class ServicepageComponent implements OnInit,OnChanges{



    id:number;
    pages=SERVICEPAGE;
  lang:any
  constructor(private blogservise:BlogService){

  }

  ngOnInit():void {
    this.lang=this.blogservise.getLang();
    console.log(this.lang);
    if(this.lang=='heb'){
      this.pages=SERVICEPAGEHEB;
    }else{
      this.pages=SERVICEPAGE;
    }

  }
  ngOnChanges(changes:SimpleChanges):void {
    this.lang;

  }

  ngDoCheck(){
    this.lang;
    this.pages;
    this.ngOnInit();
       console.log('checkinggggg');
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
