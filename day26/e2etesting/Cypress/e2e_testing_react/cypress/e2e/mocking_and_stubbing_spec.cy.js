describe("Login Form Test with Stubbed Backend", () => {
  beforeEach(() => {
    cy.intercept("GET", "/login", { success: true }).as("login").debug();
    cy.visit("http://localhost:3000");
  });

  it("should successfully log in with valid credentials", () => {
    cy.get('input[type="text"]').type("admin");
    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();
    cy.wait("@login");
    // cy.get("li").contains("Dashboard").click();
    cy.url().should("include", "/dashboard");
  });
});
