import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendAddComponent } from './friend-add/friend-add.component';
import { FriendViewComponent } from './friend-view/friend-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const app:Routes=[
  {
    path:"",component:FriendViewComponent
  },
  {
    path:"view",component:FriendViewComponent
  },
  {
    path:"add",component:FriendAddComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    FriendAddComponent,
    FriendViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
