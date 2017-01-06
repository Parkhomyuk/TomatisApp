import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./components/pages/post.component";
import {QuestionComponent} from "./components/pages/question.component";
import {MainComponent} from "./components/pages/main.component";
import {ServicepageComponent} from "./components/pages/servicepage.component";

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
  }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
