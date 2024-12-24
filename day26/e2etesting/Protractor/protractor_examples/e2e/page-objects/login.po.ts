import { element, by, browser } from 'protractor';

export default class LoginPage {
  private usernameInput = element(by.css('#username'));
  private passwordInput = element(by.css('#password'));
  private loginButton = element(by.css('button[type="submit"]'));
  private welcomeMessage = element(by.css('#dashboard_h1'));

  async get() {
    await browser.get('http://localhost:4200/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.sendKeys(username);
    await this.passwordInput.sendKeys(password);
    await this.loginButton.click();
  }

  async getWelcomeMessageText() {
    return await this.welcomeMessage.getText();
  }
  async submitLoginForm() {
    await this.loginButton.click();
  }
}
