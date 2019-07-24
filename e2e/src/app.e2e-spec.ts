import { BeerMonkeyPage } from './app.po';

describe('beer-monkey App', () => {
  let page: BeerMonkeyPage;

  beforeEach(() => {
    page = new BeerMonkeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toBe('Home');
  });
});
