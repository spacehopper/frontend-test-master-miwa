import { BeerListPage } from './beer-list.po';

describe('Beer List Page', () => {
  let listPage: BeerListPage;

  beforeEach(() => listPage = new BeerListPage());

  it('should display at least two beers', () => {/*BS*/
    const beerItems = listPage.navigateTo()
      .getBeerItems();/*BE*/
    expect(beerItems.count()).toBeGreaterThan(1);
  });

  it('should navigate to details page by ISBN', () => {/*BS*/
    const detailsPage = listPage.navigateTo()
      .clickOnFirstBeer();/*BE*/
    expect(detailsPage.getUrl())
      .toContain('/beers/9783864906466');
    expect(detailsPage.getHeaderText()).toBe('Angular');
  });
});
