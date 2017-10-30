import { Injectable, Inject } from '@angular/core';

import { NAVIGATOR_UA } from '../config';

import { Browser } from '../constants/browser';
import { Device } from '../constants/device';
import { Engine } from '../constants/engine';
import { OS } from '../constants/os';

@Injectable()
export class Platform {

    constructor(
        @Inject(NAVIGATOR_UA) private ua = window.navigator.userAgent
    ) { }

    is(identifier: RegExp): boolean {
        let collection = this.getSourceCollection(identifier);
        this.assertValidCollection(collection);

        if (collection === Browser) {
            return this.checkByHierarchy(collection, identifier);
        }

        if (collection === Device) {
            // TODO
        }

        if (collection === Engine) {
            // TODO
        }

        if (collection === OS) {
            // TODO
        }

        return false;
    }

    isCompatibleWith(identifier: RegExp): boolean {
        let collection = this.getSourceCollection(identifier);
        this.assertValidCollection(collection);

        return identifier.test(this.ua);
    }

    versionOf(identifier: RegExp): string {
        let match = identifier.exec(this.ua);
        return match[match.length - 1];
    }

    private checkByHierarchy(collection: Object, identifier: RegExp): boolean {
        for (let c of Object.keys(collection)) {
            let regex = collection[c] as RegExp;

            if (regex.test(this.ua)) {
                return collection[c] === identifier;
            }

            if (collection[c] === identifier) {
                return false;
            }
        }

        return false;
    }

    private assertValidCollection(collection: Object): void {
        if (!collection)
            throw 'The platform identifier to test is not valid.';
    }

    private getSourceCollection(identifier: RegExp): Object {
        for (let collection of [Browser, Device, Engine, OS]) {
            for (let c in collection) {
                if (collection[c] === identifier) {
                    return collection;
                }
            }
        }
        return null;
    }
}
