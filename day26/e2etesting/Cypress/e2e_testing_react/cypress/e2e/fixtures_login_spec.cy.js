describe("Login Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should fill in login form and click login button with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.get('input[type="text"]').type(users.validUser.username);
      cy.get('input[type="password"]').type(users.validUser.password);
      cy.get('button[type="submit"]').click();
    });
  });

  it("should display an error message for invalid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.get('input[type="text"]').type(users.invalidUser.username);
      cy.get('input[type="password"]').type(users.invalidUser.password);
      cy.get('button[type="submit"]').click();
    });
    cy.get("p").should("contain", "Invalid username or password");
  });
});
