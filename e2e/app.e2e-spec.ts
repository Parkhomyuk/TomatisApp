import { TomatisAppPage } from './app.po';

describe('tomatis-app App', function() {
  let page: TomatisAppPage;

  beforeEach(() => {
    page = new TomatisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
