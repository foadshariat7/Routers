import { RoutersPage } from './app.po';

describe('routers App', () => {
  let page: RoutersPage;

  beforeEach(() => {
    page = new RoutersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
