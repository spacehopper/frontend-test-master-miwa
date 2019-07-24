import { BookListPage } from './beer-list.po';

describe('Beer List Page', () => {
  let listPage: BookListPage;

  beforeEach(() => listPage = new BookListPage());

  it('should display at least two books', () => {/*BS*/
    const bookItems = listPage.navigateTo()
      .getBookItems();/*BE*/
    expect(bookItems.count()).toBeGreaterThan(1);
  });

  it('should navigate to details page by ISBN', () => {/*BS*/
    const detailsPage = listPage.navigateTo()
      .clickOnFirstBook();/*BE*/
    expect(detailsPage.getUrl())
      .toContain('/books/9783864906466');
    expect(detailsPage.getHeaderText()).toBe('Angular');
  });
});
