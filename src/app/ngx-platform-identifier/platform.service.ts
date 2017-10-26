import { Injectable, Inject } from '@angular/core';

import { NAVIGATOR_UA } from './config';
import { Browser } from './constants';

@Injectable()
export class Platform {

    constructor(
        @Inject(NAVIGATOR_UA) private ua = window.navigator.userAgent
    ) { }

    is(identifier: RegExp): boolean {
        let collection = this.getSourceCollection(identifier);

        for (let c in collection) {
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

    isBasedOn(identifier: RegExp): boolean {
        return identifier.test(this.ua);
    }

    versionOf(identifier: RegExp): string {
        let match = identifier.exec(this.ua);
        return match[match.length - 1];
    }

    private getSourceCollection(identifier: any): Object {
        for (let collection of [Browser]) {
            for (let c in collection) {
                if (collection[c] === identifier) {
                    return collection;
                }
            }
        }
        return null;
    }
}
