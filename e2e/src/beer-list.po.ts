import { browser, element, by } from 'protractor';

export class /*BS*/BeerDetailsPage/*BE*/ {

  getHeaderText() {
    return element(by.css('h1')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class /*BS*/BeerListPage/*BE*/ {

  navigateTo() {
    browser.get('/beers');/*BS*/
    return this;/*BE*/
  }

  getBeerItems() {
    return element.all(by.css('bm-beer-list-item'));
  }

  clickOnFirstBeer() {
    this.getBeerItems().then(console.log);
    this.getBeerItems().first().click();
    return new BeerDetailsPage();
  }
}
