import { browser, element, by, protractor } from 'protractor';

describe('Async Conditions', () => {
  it('should wait for element visibility', async () => {
    await browser.get('http://localhost:4200');

    const usernameInput = element(by.css('#username'));
    const passwordInput = element(by.css('#password'));
    const sumbitBtn = element(by.css('#login-button'));
    const h1 = element(by.css('#dashboard_h1'));
    const EC = protractor.ExpectedConditions;

     usernameInput.sendKeys('testuser');
     passwordInput.sendKeys('test');
     sumbitBtn.click()
    // Wait for the element to be visible before interacting with it
    await browser.wait(EC.visibilityOf(h1), 5000);
    (await h1.getText()).match('Dashboard')
  });
});
