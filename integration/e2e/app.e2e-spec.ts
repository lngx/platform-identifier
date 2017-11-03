import { browser, element, by } from 'protractor';

describe('ngx-platform-identifier E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display the browser platform', () => {
    expect(element(by.css('.browser')).getText()).toMatch(/[\w\d\.]+/);
  });

  it('should display the engine platform', () => {
    expect(element(by.css('.engine')).getText()).toMatch(/[\w\d\.]+/);
  });

  it('should display the OS platform', () => {
    expect(element(by.css('.os')).getText()).toMatch(/[\w\d\.]+/);
  });

});
