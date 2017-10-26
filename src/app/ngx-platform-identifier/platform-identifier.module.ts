import { NgModule } from '@angular/core';

import { NAVIGATOR_UA } from './config';
import { Platform } from './platform.service';

@NgModule({
    declarations: [
        Platform
    ],
    imports: [],
    exports: [
        Platform
    ],
    providers: [
        { provide: NAVIGATOR_UA, useValue: window.navigator.userAgent }
    ]
})
export class PlatformIdentifierModule { }
