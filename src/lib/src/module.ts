import { NgModule } from '@angular/core';

import { NAVIGATOR_UA } from './config';

import { Browser } from './constants/browser';
import { Platform } from './services/platform.service';

@NgModule({
  providers: [
    { provide: NAVIGATOR_UA, useValue: window.navigator.userAgent },
    Platform
  ]
})
export class PlatformIdentifierModule { }
