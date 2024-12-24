describe("To-Do List", () => {
  it("Adds a todo item", () => {
    cy.visit("/");
    cy.get("input").type("Task 1");
    cy.get("button").click();
    cy.get("ul").contains("Task 1");
  });

  it("Does not add an empty todo item", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.get("ul").should("not.have.descendants", "li");
  });
});
