import { AppTestModulePage } from './app.po';

describe('ngx-platform-identifier Test App', () => {
  let page: AppTestModulePage;

  beforeEach(() => {
    page = new AppTestModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
