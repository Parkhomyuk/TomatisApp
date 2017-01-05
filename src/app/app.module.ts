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

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, AboutComponent, ServiComponent, BlogComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
