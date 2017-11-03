import { NgModule } from '@angular/core';

import { NAVIGATOR_UA } from './config';
import { Platform } from './services/platform.service';

export const defaultUserAgent = window.navigator.userAgent;

@NgModule({
  providers: [
    { provide: NAVIGATOR_UA, useValue: defaultUserAgent },
    Platform
  ]
})
export class PlatformIdentifierModule { }
