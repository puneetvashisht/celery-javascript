describe("Dashboard Page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("should display the dashboard after successful login", () => {
    cy.get('input[type="text"]').type("admin");
    cy.get('input[type="password"]').type("password");
    cy.get('button[type="submit"]').click();
    // cy.get("li").contains("Dashboard").click();
    cy.get("h1").should("contain", "Dashboard");
    cy.get("p").should(
      "contain",
      "Welcome to the Dashboard! You are logged in."
    );
  });

  it("should redirect to login page if not logged in", () => {
    cy.url().should("include", "/");
  });
});
