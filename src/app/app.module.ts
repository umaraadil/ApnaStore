import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './home/welcomepage.component';
import { MenItemComponent } from './men/menItemList.component';
import { WomenItemComponent } from './women/womenItemList.component';
import { ChildrenitemComponent } from './children/childrenitem.component';

@NgModule({
  declarations:[
    AppComponent,
    MenItemComponent,
    WelcomepageComponent,
    WomenItemComponent,
    ChildrenitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'womenItems',component:WomenItemComponent},
      {path:'menItems',component:MenItemComponent},
      {path:'welcomepage',component:WelcomepageComponent},
      {path:'childrenItems',component:ChildrenitemComponent},
      {path:'',redirectTo:'welcomepage',pathMatch:'full'},
      {path:'**',redirectTo:'welcomepage',pathMatch:'full'}
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
