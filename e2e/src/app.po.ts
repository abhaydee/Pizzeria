import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateOrder(){
    let url="http://localhost:4200/orders"
    return browser.get(url) as Promise<any>;

  }

  navigateCustom(){
    let url="http://localhost:4200/ingredients"
    return browser.get(url) as Promise<any>;

  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
