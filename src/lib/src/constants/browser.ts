import { Collection } from '../interfaces/collection';
import { Identifier } from '../interfaces/identifier';

export const Browser: Collection<Identifier> = {
    FIREFOX: {
        name: 'Mozilla Firefox',
        matchingExpression: /\bFirefox\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    OPERA: {
        name: 'Opera',
        matchingExpression: /\b(Opera|OPR)\/([\d\.]*)/,
        versionMatchingGroup: 2
    },
    EDGE: {
        name: 'Microsoft Edge',
        matchingExpression: /\bEdge\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    CHROME: {
        name: 'Google Chrome',
        matchingExpression: /\b(Chrome|CriOS)\/([\d\.]*)/,
        versionMatchingGroup: 2
    },
    SAFARI: {
        name: 'Safari',
        matchingExpression: /\bSafari\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    IE: {
        name: 'Internet Explorer',
        matchingExpression: /\b(MSIE |Trident\/)([\d\.]*)/,
        versionMatchingGroup: 2
    }
};
