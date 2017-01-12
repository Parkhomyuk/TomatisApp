import { Component } from '@angular/core';
//noinspection TypeScriptCheckImport
import {Blog} from '../content/blog_content/Blog';
//noinspection TypeScriptCheckImport
import {BLOG} from '../content/blog_content/blog_content';

//noinspection TypeScriptValidateTypes
/*
const BLOG: Blog[]=[
  {
    image:'img/blog/1.jpg',
    date:'18.aug.2016',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'16',
    author:' premiumlayers',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },
  {
    image:'img/blog/2.jpg',
    date:'01.jan.2017',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'21',
    author:' admin',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },
  {
    image:'img/blog/4.jpg',
    date:'06.jan.2017',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'9',
    author:' admin',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },
  {
    image:'img/blog/1.jpg',
    date:'18.aug.2016',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'16',
    author:' premiumlayers',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },
  {
    image:'img/blog/2.jpg',
    date:'01.jan.2017',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'21',
    author:' admin',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },
  {
    image:'img/blog/4.jpg',
    date:'06.jan.2017',
    button:'read more',
    header:'Improving and Removing Envato Market Image Watermarking',
    n_comments:'9',
    author:' admin',
    content:'This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor'
  },


];
*/


@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',

})
export class BlogpageComponent {
  blogs=BLOG.slice(0,6);
  blogs2=BLOG.slice(6,12);

  showMe:string='i<2';
  count: number=0;
  increase() : number {
    return this.count++;
  }

  s=3;
  onSelect1(a) {

     if(a=='2'){
       this.blogs=BLOG.slice(9,12);
     }
    if(a=='1'){
      this.blogs=BLOG.slice(0,6);
    }
    if(a=='3'){
      this.blogs=BLOG.slice(5,6);
    }
  }
}
