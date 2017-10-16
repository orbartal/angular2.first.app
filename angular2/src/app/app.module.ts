import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppHello } from './components/1/hello/hello.component';
import { AppComponent }  from './app.component';


//Will be used to map url to pages\component in src\app\app.component.html
const appRoutes: Routes = [
   { path: '1Hello', component: AppHello },
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)  ], //, HttpModule
  declarations: [ AppComponent, AppHello  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
