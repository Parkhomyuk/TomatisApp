import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//noinspection TypeScriptCheckImport
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component.ts";
import {AboutComponent} from "./components/about/about.component";
import {ServiComponent} from "./components/servi/servi.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contacts/contact.component";
import {routing} from "./app.routing";
import {QuestionComponent} from "./components/pages/question.component";
import {PostComponent} from "./components/pages/post.component";
import {MainComponent} from "./components/pages/main.component";
import {ServicepageComponent} from "./components/pages/servicepage.component";
import {BlogpageComponent} from "./components/pages/blogpage.component";
import {BlogsingleComponent} from "./components/pages/blogsingle.component";
import {ContactpageComponent} from "./components/pages/contactpage.component";
import {Servicepage2Component} from "./components/pages/servicepage2.component";
import {Servicepage3Component} from "./components/pages/servicepage3.component";
import {Servicepage4Component} from "./components/pages/servicepage4.component";
import {Servicepage5Component} from "./components/pages/servicepage5.component";
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDrj4XAfs-vBEiObvGZB4LM_PztZV445Jc',
  authDomain: 'busness-bb9b3.firebaseapp.com',
  databaseURL: 'https://busness-bb9b3.firebaseio.com',
  storageBucket: 'busness-bb9b3.appspot.com',
  messagingSenderId: '830086608321'
};


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AboutComponent, ServiComponent, BlogComponent, ContactComponent, QuestionComponent, PostComponent, MainComponent, ServicepageComponent, BlogpageComponent,BlogsingleComponent,
    ContactpageComponent, Servicepage2Component, Servicepage3Component, Servicepage4Component, Servicepage5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
