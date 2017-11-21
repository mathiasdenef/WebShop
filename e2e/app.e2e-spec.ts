import { WebShopPage } from './app.po';

describe('web-shop App', () => {
  let page: WebShopPage;

  beforeEach(() => {
    page = new WebShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
