import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./components/pages/post.component";
import {QuestionComponent} from "./components/pages/question.component";
import {MainComponent} from "./components/pages/main.component";
import {ServicepageComponent} from "./components/pages/servicepage.component";
import {BlogpageComponent} from "./components/pages/blogpage.component";
import {BlogsingleComponent} from "./components/pages/blogsingle.component";
import {ContactpageComponent} from "./components/pages/contactpage.component";
import {Servicepage2Component} from "./components/pages/servicepage2.component";
import {Servicepage3Component} from "./components/pages/servicepage3.component";
import {Servicepage4Component} from "./components/pages/servicepage4.component";
import {Servicepage5Component} from "./components/pages/servicepage5.component";

//noinspection TypeScriptValidateTypes
const appRoutes: Routes=[
  {
    path:'',
    component: MainComponent
  },
  {
    path:'question',
    component:QuestionComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'servicepage',
    component:ServicepageComponent
  },
  {
    path:'servicepage2',
    component:Servicepage2Component
  },
  {
    path:'servicepage3',
    component:Servicepage3Component
  },
  {
    path:'servicepage4',
    component:Servicepage4Component
  },
  {
    path:'servicepage5',
    component:Servicepage5Component
  },
  {
    path:'blogpage',
    component:BlogpageComponent
  },
  {
    path:'blogsingle',
    component:BlogsingleComponent
  },
  {
    path:'contactpage',
    component:ContactpageComponent
  }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
