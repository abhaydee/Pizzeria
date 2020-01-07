import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should check our story', () => {
    page.navigateTo();
    const c = element.all(by.tagName('h3')).first();
    const t = c.getText();
    expect(t).toEqual('Our Story');
  });

  it( 'should check for button text', () => {
    page.navigateOrder();
    const pl = element(by.css('.testing'));
    const text = pl.getText();
    expect(text).toEqual('Add to Cart');
});


  it( 'should check for ingredients text', () => {
  page.navigateCustom();
  const pl = element.all(by.css('#paragraph'));
  const text = pl.getText();
  expect(text).toContain('Total Cost:0');
});

  it('should check nav', () => {
    page.navigateTo();
    const c = element(by.tagName('nav')).isPresent();
    expect(c).toBeTruthy();
  });


  it('should check Pizzaria in navbar', () => {
    page.navigateTo();
    const c = element.all(by.tagName('a')).first();
    const t = c.getText();
    expect(t).toEqual('Pizzeria');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
//   it( 'should check for paragraf text', () =>{
//     page.navigateTo();
//     let pl=element(by.css('.greenc'));
//     let text=pl.getText();
//     expect(text).toEqual('This is paral');
// });



});
