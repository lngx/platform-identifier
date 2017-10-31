import { Collection } from '../interfaces/collection';
import { Identifier } from '../interfaces/identifier';

export const OS: Collection<Identifier> = {
    WINDOWS_PHONE: {
        name: 'Windows Phone',
        matchingExpression: /\bWindows Phone( OS)? ?([\d\.]*)/,
        versionMatchingGroup: 2
    },
    WINDOWS: {
        name: 'Windows',
        matchingExpression: /\bWindows(( NT)? ?[\d\.]*)/,
        versionMatchingGroup: 1,
        versionTranslator: (version: string) => {
            switch (version) {
                case 'NT':
                case 'NT 3.1':
                case 'NT 3.5':
                case 'NT 3.51':
                case 'NT 4.0':
                case '98':
                case '95':
                case '3.2':
                case '3.11': return version;
                case '4.00': return '95';
                case '4.10': return '98';
                case '4.90': return 'ME';
                case 'NT 5.0': return '2000';
                case 'NT 5.1': return 'XP';
                case 'NT 5.2': return 'XP/2003/2003 R2';
                case 'NT 6.0': return 'Vista/2008';
                case 'NT 6.1': return '7/2008 R2';
                case 'NT 6.2': return '8/2012';
                case 'NT 6.3': return '8.1/2012 R2';
                case 'NT 10.0': return '10/2016';
            }
            return '';
        }
    },
    IOS: {
        name: 'iOS',
        matchingExpression: /\b(iPad|iPhone|iPod)\b[^\)]+ OS ?([\d\._]+)/,
        versionMatchingGroup: 2,
        versionTranslator: (version: string) => version.replace('_', '.')
    },
    MAC: {
        name: 'Mac OS X',
        matchingExpression: /\b(Intel )?Mac OS( X)? ?([\d\._]*)/,
        versionMatchingGroup: 3,
        versionTranslator: (version: string) => version.replace('_', '.')
    },
    ANDROID: {
        name: 'Android',
        matchingExpression: /\bAndroid;? ?([\d\.]+)/,
        versionMatchingGroup: 1
    },
    CHROME: {
        name: 'Chrome OS',
        matchingExpression: /\bCrOS ?[^\b\) ]* ([\d\.]+)/,
        versionMatchingGroup: 1
    },
    LINUX: {
        name: 'Linux',
        matchingExpression: /\bLinux\b/
    },
    UNIX: {
        name: 'Unix',
        matchingExpression: /\b(Unix|U)\b/i
    }
};
