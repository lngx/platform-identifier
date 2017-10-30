import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformIdentifierModule } from 'ngx-platform-identifier';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, PlatformIdentifierModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
