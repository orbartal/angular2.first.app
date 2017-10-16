import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppHello } from './components/1/hello/hello.component';
import { AppVariables } from './components/2/variables/variables.component';
import { AppTemplateUrl } from './components/3/template-url/template-url.component';
import { ApIfFor } from './components/4/if-for/if-for.component';
import { ApImages } from './components/5/images/images.component';
import { AppComponent }  from './app.component';


//Will be used to map url to pages\component in src\app\app.component.html
const appRoutes: Routes = [
   { path: '1Hello', component: AppHello },
   { path: '2Variables', component: AppVariables },
   { path: '3TemplateUrl', component: AppTemplateUrl },
   { path: '4ApIfFor', component: ApIfFor },
   { path: '5ApImages', component: ApImages },
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)  ], //, HttpModule
  declarations: [ AppComponent, AppHello,  AppVariables, AppTemplateUrl,
                  ApIfFor, ApImages],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
