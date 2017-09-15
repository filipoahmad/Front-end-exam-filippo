import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserList} from './userlist/userlist.component';
import { APIServiceService } from "./apiservice.service";

@NgModule({
  declarations: [
    AppComponent,
    UserList,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : 'userlist', component : UserList },
      { path : 'addlist', component : AdduserComponent }
    ])
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }