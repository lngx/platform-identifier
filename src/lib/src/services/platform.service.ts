import { Injectable, Inject } from '@angular/core';

import { NAVIGATOR_UA } from '../config';

import { Browser } from '../constants/browser';
import { Device } from '../constants/device';
import { Engine } from '../constants/engine';
import { OS } from '../constants/os';

import { PlatformInfo } from '../common/platform-info';
import { Identifier } from '../interfaces/identifier';
import { Collection } from '../interfaces/collection';

@Injectable()
export class Platform {

    get browser(): PlatformInfo {
        if (this._browser === null)
            this._browser = PlatformInfo.from(Browser, this.ua);

        return this._browser;
    }

    private _browser: PlatformInfo = null;

    /* TODO: Make the devices list by user-agent first
    get device(): PlatformInfo {
        if (this._device === null)
            this._device = PlatformInfo.from(Device, this.ua);

        return this._device;
    }

    private _device: PlatformInfo = null;
    */

    get engine(): PlatformInfo {
        if (this._engine === null)
            this._engine = PlatformInfo.from(Engine, this.ua);

        return this._engine;
    }

    private _engine: PlatformInfo = null;

    get os(): PlatformInfo {
        if (this._os === null)
            this._os = PlatformInfo.from(OS, this.ua);

        return this._os;
    }

    private _os: PlatformInfo = null;

    constructor(
        @Inject(NAVIGATOR_UA) private ua = window.navigator.userAgent
    ) { }

    is(identifier: Identifier): boolean {
        let collection = this.getSourceCollection(identifier);
        this.assertValidCollection(collection);

        return this.checkByHierarchy(collection, identifier);
    }

    isCompatibleWith(identifier: Identifier): boolean {
        let collection = this.getSourceCollection(identifier);
        this.assertValidCollection(collection);

        return identifier.matchingExpression.test(this.ua);
    }

    versionOf(identifier: Identifier): string {
        if (!identifier.versionMatchingGroup)
            throw 'This platform doesn\'t specify any version in the user-agent information.';

        let matches = identifier.matchingExpression.exec(this.ua);
        if (identifier.versionMatchingGroup < 0 ||
            identifier.versionMatchingGroup >= matches.length)
            return '';

        return matches[identifier.versionMatchingGroup];
    }

    private checkByHierarchy(collection: Collection<Identifier>, identifier: Identifier): boolean {
        for (let c of Object.keys(collection)) {
            let collectionIdentifier = collection[c] as Identifier;
            if (collectionIdentifier.matchingExpression.test(this.ua)) {
                return collection[c] === identifier;
            }

            if (collection[c] === identifier) {
                return false;
            }
        }

        return false;
    }

    private assertValidCollection(collection: Collection<Identifier>): void {
        if (!collection)
            throw 'The platform identifier to test is not valid.';
    }

    private getSourceCollection(identifier: Identifier): Collection<Identifier> {
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
