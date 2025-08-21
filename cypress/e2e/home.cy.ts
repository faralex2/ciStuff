describe("Smoke test", () => {
  it("Открывает главную и видит Vite", () => {
    cy.visit("/");
    cy.contains("Vite").should("be.visible");
  });

  it("видит заголовок Vite + React", () => {
    cy.visit("/");
    cy.contains("Vite + React").should("be.visible");
  });
});
