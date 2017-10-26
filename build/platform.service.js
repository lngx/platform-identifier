var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { NAVIGATOR_UA } from './config';
import { Browser } from './constants';
var Platform = (function () {
    function Platform(ua) {
        if (ua === void 0) { ua = window.navigator.userAgent; }
        this.ua = ua;
    }
    Platform.prototype.is = function (identifier) {
        var collection = this.getSourceCollection(identifier);
        for (var c in collection) {
            var regex = collection[c];
            if (regex.test(this.ua)) {
                return collection[c] === identifier;
            }
            if (collection[c] === identifier) {
                return false;
            }
        }
        return false;
    };
    Platform.prototype.isBasedOn = function (identifier) {
        return identifier.test(this.ua);
    };
    Platform.prototype.versionOf = function (identifier) {
        var match = identifier.exec(this.ua);
        return match[match.length - 1];
    };
    Platform.prototype.getSourceCollection = function (identifier) {
        for (var _i = 0, _a = [Browser]; _i < _a.length; _i++) {
            var collection = _a[_i];
            for (var c in collection) {
                if (collection[c] === identifier) {
                    return collection;
                }
            }
        }
        return null;
    };
    return Platform;
}());
Platform = __decorate([
    Injectable(),
    __param(0, Inject(NAVIGATOR_UA)),
    __metadata("design:paramtypes", [Object])
], Platform);
export { Platform };
