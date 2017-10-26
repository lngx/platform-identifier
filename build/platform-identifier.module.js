var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NAVIGATOR_UA } from './config';
import { Platform } from './platform.service';
var PlatformIdentifierModule = (function () {
    function PlatformIdentifierModule() {
    }
    return PlatformIdentifierModule;
}());
PlatformIdentifierModule = __decorate([
    NgModule({
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
], PlatformIdentifierModule);
export { PlatformIdentifierModule };
