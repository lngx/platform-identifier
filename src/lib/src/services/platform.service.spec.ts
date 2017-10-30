import { TestBed, async, inject } from '@angular/core/testing';

import { NAVIGATOR_UA } from '../config';
import { Browser } from '../constants/browser';
import { Platform } from './platform.service';

describe('Platform', () => {

    let testIsFn = (identifier: RegExp, ua: string, expectation = true) => {
        it('#is should return ' + expectation.toString() + ' for the user-agent "' + ua + '"', () => {
            let service = new Platform(ua);
            expect(service.is(identifier)).toBe(expectation, ua);
        });
    };

    /* tslint:disable:max-line-length */
    let chromeUserAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36',
        'Mozilla/5.0 (Linux; Android 6.0.1; SM-T800 Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.107 Safari/537.36',
        'Mozilla/5.0 (Linux; Android 4.4.2; RKM MK902 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
        'Mozilla/5.0 (Linux; U) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.79 Safari/537.4',
        'Mozilla/5.0 (en-us) AppleWebKit/534.14 (KHTML, like Gecko; Google Wireless Transcoder) Chrome/9.0.597 Safari/534.14',
    ];

    let firefoxUserAgents = [
        'Mozilla/5.0 (Windows NT 5.1; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0',
        'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20150101 Firefox/47.0 (Chrome)',
        'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20150101 Firefox/20.0 (Chrome)',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:30.0) Gecko/20100101 Firefox/30.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0',
        'Mozilla/5.0 (X11; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0',
        'Ruby, Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:30.0) Gecko/20100101 Firefox/30.0',
        'Mozilla/5.0 (Android; Mobile; rv:38.0) Gecko/38.0 Firefox/38.0',
        'Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0',
        'Mozilla/5.0 (Android 5.0.2; Tablet; rv:45.0) Gecko/45.0 Firefox/45.0',
    ];

    let ieUserAgents = [
        'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
        'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows NT 6.2; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)',
        'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
        'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; yie11; rv:11.0) like Gecko',
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)',
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)',
        'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)',
        'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Tablet PC 2.0; .NET4.0C; .NET4.0E; EIE10;ENUSWOL)',
    ];

    let edgeUserAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
        'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240',
        'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586',
        'Mozilla/5.0 (Windows NT 5.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
    ];

    let operaUserAgents = [
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991',
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 OPR/42.0.2393.94',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 OPR/42.0.2393.94',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.39',
        'Opera/9.80 (X11; Linux zvav; U; en) Presto/2.8.119 Version/11.10',
        'Opera/9.80 (Windows NT 6.2; Win64; x64) Presto/2.12.388 Version/12.15',
        'Opera/9.80 (Macintosh; Intel Mac OS X 10.10.5) Presto/2.12.388 Version/12.16',
    ];

    let safariUserAgents = [
        'Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/601.4.4 (KHTML, like Gecko) Version/9.0.3 Safari/601.4.4',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E188a Safari/601.1'
    ];

    describe('Chrome', () => {
        chromeUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua));
        firefoxUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua, false));
        ieUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua, false));
        edgeUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua, false));
        operaUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua, false));
        safariUserAgents.forEach(ua => testIsFn(Browser.CHROME, ua, false));

        it('#is should return the version 60.0.3112.113 for Chrome browser', () => {
            for (let ua of [
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
                'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113'
            ]) {
                let service = new Platform(ua);
                expect(service.versionOf(Browser.CHROME)).toBe('60.0.3112.113');
            }
        });
    });

    describe('Firefox', () => {
        firefoxUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua));
        chromeUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua, false));
        ieUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua, false));
        edgeUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua, false));
        operaUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua, false));
        safariUserAgents.forEach(ua => testIsFn(Browser.FIREFOX, ua, false));
    });

    describe('Internet Explorer', () => {
        ieUserAgents.forEach(ua => testIsFn(Browser.IE, ua));
        chromeUserAgents.forEach(ua => testIsFn(Browser.IE, ua, false));
        firefoxUserAgents.forEach(ua => testIsFn(Browser.IE, ua, false));
        edgeUserAgents.forEach(ua => testIsFn(Browser.IE, ua, false));
        operaUserAgents.forEach(ua => testIsFn(Browser.IE, ua, false));
        safariUserAgents.forEach(ua => testIsFn(Browser.IE, ua, false));
    });

    describe('Edge', () => {
        edgeUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua));
        chromeUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua, false));
        firefoxUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua, false));
        ieUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua, false));
        operaUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua, false));
        safariUserAgents.forEach(ua => testIsFn(Browser.EDGE, ua, false));
    });

    describe('Opera', () => {
        operaUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua));
        chromeUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua, false));
        firefoxUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua, false));
        ieUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua, false));
        edgeUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua, false));
        safariUserAgents.forEach(ua => testIsFn(Browser.OPERA, ua, false));
    });

    describe('Safari', () => {
        safariUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua));
        chromeUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua, false));
        firefoxUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua, false));
        ieUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua, false));
        edgeUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua, false));
        operaUserAgents.forEach(ua => testIsFn(Browser.SAFARI, ua, false));
    });
    /* tslint:enable:max-line-length */

    describe('With the TestBed (for Angular integration)', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({ providers: [Platform, { provide: NAVIGATOR_UA, useValue: window.navigator.userAgent }] });
        }));

        it('test should return a value for Platform.is',
            async(inject([Platform], (service: Platform) => {
                expect(service.is(Browser.CHROME)).toBeDefined();
            })));

        it('test should return a value for Platform.isCompatibleWith',
            async(inject([Platform], (service: Platform) => {
                expect(service.isCompatibleWith(Browser.CHROME)).toBeDefined();
            })));

        it('test should return a value for Platform.versionOf',
            async(inject([Platform], (service: Platform) => {
                expect(service.versionOf(Browser.CHROME)).toBeDefined();
            })));
    });
});
