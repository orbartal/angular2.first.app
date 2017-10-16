import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppHello } from './components/1/hello/hello.component';
import { AppVariables } from './components/2/variables/variables.component';
import { AppTemplateUrl } from './components/3/template-url/template-url.component';
import { ApIfFor } from './components/4/if-for/if-for.component';
import { ApImages } from './components/5/images/images.component';
import { AppProductsCrud }  from './components/6/products/crud/crud.component';
import { ProductFormComponent } from './components/6/products/form/product-form.component';
import { PageNotFoundComponent } from  './components/7/page-not-found/page-not-found.component';
import { HelloInjectComponent } from  './components/8/injectable/component/hello.inject.component';
import { HaventHandlerComponent } from  './components/9/event-handler/event-handler.component';

import { AppComponent }  from './app.component';

//Will be used to map url to pages\component in src\app\app.component.html
const appRoutes: Routes = [
   { path: '1Hello', component: AppHello },
   { path: '2Variables', component: AppVariables },
   { path: '3TemplateUrl', component: AppTemplateUrl },
   { path: '4IfFor', component: ApIfFor },
   { path: '5ImagesFromUtl', component: ApImages },
   { path: '6AppProductsCrud', component: AppProductsCrud },
   { path: '7PageNotFoundComponent', component: PageNotFoundComponent },
   { path: '8HelloInjectComponent', component: HelloInjectComponent },
   { path: '9HaventHandlerComponent', component: HaventHandlerComponent },
   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule ],
  declarations: [ AppComponent, AppHello,  AppVariables, AppTemplateUrl,
                  ApIfFor, ApImages, AppProductsCrud, ProductFormComponent,
                  PageNotFoundComponent, HelloInjectComponent, HaventHandlerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
