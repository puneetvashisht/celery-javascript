describe("Login Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should fill in login form and click login button", () => {
    cy.get('input[type="text"]').type("admin");
    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();
  });

  it("should display an error message for invalid credentials", () => {
    cy.get('input[type="text"]').type("invalid_user");
    cy.get('input[type="password"]').type("invalid_password");
    cy.get('button[type="submit"]').click();
    cy.get("p").should("contain", "Invalid username or password");
  });
});
