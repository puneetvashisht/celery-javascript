import LoginPage from './page-objects/login.po';

describe('Page Object Model', () => {
  const loginPage = new LoginPage();

  beforeAll(async () => {
    await loginPage.get();
  });

  it('should login successfully', async () => {
    await loginPage.login('testuser', 'test');
    const welcomeMessage = await loginPage.getWelcomeMessageText();
    expect(welcomeMessage).toContain('Dashboard');
  });
});
