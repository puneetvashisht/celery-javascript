import { browser, element, by } from 'protractor';

describe('Locators and Interactions', () => {
  beforeAll(async () => {
    await browser.get('http://localhost:4200/');
  });

  it('should interact with elements using locators', async () => {
    // Using CSS Selector
    const usernameInput = element(by.css('#username'));
    await usernameInput.sendKeys('testuser');

    // Using XPath Selector
    const passwordInput = element(by.xpath('//*[@id="password"]'));
    await passwordInput.sendKeys('test');

    // Using Name Attribute
    const loginButton = element(by.name('login-button'));
    await loginButton.click();

    // Using Link Text
    const logoutLink = element(by.linkText('Logout'));
    expect(await logoutLink.isPresent()).toBe(true);
  });
});
