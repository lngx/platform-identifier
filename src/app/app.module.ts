import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlatformIdentifierModule } from './ngx-platform-identifier/platform-identifier.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlatformIdentifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
