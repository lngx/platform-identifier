import { Identifier } from '../interfaces/identifier';
import { Collection } from '../interfaces/collection';

export class PlatformInfo {

    name: string;
    version?: string;

    constructor(name: string, version = '') {
        this.name = name;
        this.version = version;
    }

    toString(): string {
        return `${this.name} ${this.version}`.trim();
    }

    static from(collection: Collection<Identifier>, ua: string): PlatformInfo {
        for (let c of Object.keys(collection)) {
            let collectionIdentifier = collection[c] as Identifier;
            if (collectionIdentifier.matchingExpression.test(ua)) {
                return PlatformInfo.extractIdentifierInformation(collectionIdentifier, ua);
            }
        }

        return new PlatformInfo('');
    }

    private static extractIdentifierInformation(identifier: Identifier, ua: string): PlatformInfo {
        let info = new PlatformInfo(identifier.name);

        let matches = identifier.matchingExpression.exec(ua);
        if (identifier.versionMatchingGroup >= 0 &&
            identifier.versionMatchingGroup < matches.length) {
            let version = matches[identifier.versionMatchingGroup].trim();
            if (identifier.versionTranslator)
                version = identifier.versionTranslator(version);

            info.version = version;
        }

        return info;
    }
}