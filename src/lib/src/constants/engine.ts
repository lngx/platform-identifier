import { Collection } from '../interfaces/collection';
import { Identifier } from '../interfaces/identifier';

export const Engine: Collection<Identifier> = {
    BLINK: {
        name: 'Blink',
        matchingExpression: /\bChrome\/((2[8-9]|[3-9]\d*)[\d\.]*)/,
        versionMatchingGroup: 1
    },
    WEBKIT: {
        name: 'WebKit',
        matchingExpression: /\bAppleWebKit\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    GECKO: {
        name: 'Gecko',
        matchingExpression: /\bGecko\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    PRESTO: {
        name: 'Presto',
        matchingExpression: /\bPresto\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    TRIDENT: {
        name: 'Trident',
        matchingExpression: /\bTrident\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    EDGE: {
        name: 'Edge',
        matchingExpression: /\bEdge\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    KHTML: {
        name: 'KHTML',
        matchingExpression: /\bKHTML\/([\d\.]*)/,
        versionMatchingGroup: 1
    },
    NETFRONT: {
        name: 'NetFront',
        matchingExpression: /\bNetFront\/([\d\.]*)/,
        versionMatchingGroup: 1
    }
};
