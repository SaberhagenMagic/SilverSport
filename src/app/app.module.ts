import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APPROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { UseradminComponent } from './components/useradmin/useradmin.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    UseradminComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
