import { Collection } from '../interfaces/collection';
import { Identifier } from '../interfaces/identifier';

export const Browser: Collection<Identifier> = {
    FIREFOX: {
        name: 'Mozilla Firefox',
        matchingExpression: new RegExp('\\bFirefox\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    OPERA: {
        name: 'Opera',
        matchingExpression: new RegExp('\\b(Opera|OPR)\\/([\\d\\.]*)'),
        versionMatchingGroup: 2
    },
    EDGE: {
        name: 'Microsoft Edge',
        matchingExpression: new RegExp('\\bEdge\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    CHROME: {
        name: 'Google Chrome',
        matchingExpression: new RegExp('\\b(Chrome|CriOS)\\/([\\d\\.]*)'),
        versionMatchingGroup: 2
    },
    SAFARI: {
        name: 'Safari',
        matchingExpression: new RegExp('\\bSafari\\/([\\d\\.]*)'),
        versionMatchingGroup: 1
    },
    IE: {
        name: 'Internet Explorer',
        matchingExpression: new RegExp('\\b(MSIE |Trident\\/)([\\d\\.]*)'),
        versionMatchingGroup: 2
    }
}
