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
import {AboutComponent} from "./components/about/about.component";
import {PostPageComponent} from "./components/pages/postpage.component";
import {LoginComponent} from "./components/signInOut/login/login.component";
import {SignupComponent} from "./components/signInOut/signup/signup.component";


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
    component:PostPageComponent
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
    path:'blogsingle/:id/:$key',
    component:BlogsingleComponent,


  },
  {
    path:'contactpage',
    component:ContactpageComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent


  },
  {
    path:'signup',
    component: SignupComponent

  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },





];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
