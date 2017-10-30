import { browser, element, by } from 'protractor';

describe('QuickStart Lib E2E Tests', function () {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should display platform detection', () => {
    expect(element(by.css('h3')).getText()).toEqual(['Is running chrome? true', 'Is running chrome? false']);
  });

});
