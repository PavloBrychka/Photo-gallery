import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp0Component } from './comp0/comp0.component';

const appRoutes: Routes = [
  {path: '', component: Comp0Component},
  {path: 'comp0', component: Comp0Component},
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component},
  {path: 'comp3', component: Comp3Component},
  {path: 'comp4', component: Comp4Component},
]

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp0Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
