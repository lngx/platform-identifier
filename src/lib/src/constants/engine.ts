import { Collection } from '../interfaces/collection';
import { Identifier } from '../interfaces/identifier';

export const Engine: Collection<Identifier> = {
    BLINK: {
        name: 'Blink',
        matchingExpression: new RegExp('\\bChrome\\/((2[8-9]|[3-9]\\d*)[\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    WEBKIT: {
        name: 'WebKit',
        matchingExpression: new RegExp('\\bAppleWebKit\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    GECKO: {
        name: 'Gecko',
        matchingExpression: new RegExp('\\bGecko\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    PRESTO: {
        name: 'Presto',
        matchingExpression: new RegExp('\\bPresto\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    TRIDENT: {
        name: 'Trident',
        matchingExpression: new RegExp('\\bTrident\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    EDGE: {
        name: 'Edge',
        matchingExpression: new RegExp('\\bEdge\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    KHTML: {
        name: 'KHTML',
        matchingExpression: new RegExp('\\bKHTML\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    NETFRONT: {
        name: 'NetFront',
        matchingExpression: new RegExp('\\bNetFront\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    }
}
