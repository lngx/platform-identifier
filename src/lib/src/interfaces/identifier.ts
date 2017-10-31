export interface Identifier {
    name: string;
    matchingExpression: RegExp;
    versionMatchingGroup?: number;
    versionTranslator?: (version: string) => string;
}