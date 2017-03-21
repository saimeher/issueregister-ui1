import { AdminltePage } from './app.po';

describe('adminlte App', () => {
  let page: AdminltePage;

  beforeEach(() => {
    page = new AdminltePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
