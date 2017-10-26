export declare class Platform {
    private ua;
    constructor(ua?: string);
    is(identifier: RegExp): boolean;
    isBasedOn(identifier: RegExp): boolean;
    versionOf(identifier: RegExp): string;
    private getSourceCollection(identifier);
}
