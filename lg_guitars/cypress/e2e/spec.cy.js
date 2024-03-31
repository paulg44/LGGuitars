describe("My First Test", () => {
  it("visits homepage", () => {
    cy.visit("https://lgguitars.netlify.app");
    cy.contains("Process").click();
    cy.contains("Home").click();
    cy.contains("Contact").click();

    cy.url().should("include", "contact-page");

    cy.get('[placeholder="Name"]').type("Paul Garton");
    cy.get('[placeholder="Name"]').should("have.value", "Paul Garton");
    cy.get(".btn").click();

    cy.contains("Thank you!");
  });
});
