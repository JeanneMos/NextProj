

// describe('template spec', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000');
//     cy.injectAxe()
//   });
//   it('Has no detectable a11y violations on load homepage', () => {
//     // Test the page at initial load
//     cy.checkA11y()
//   })
//   it('passes', () => {
//     // cy.get('.input-name')
//     //  .should('have.label')
//     //  .prev().should('have.attr', 'style', 'color: orange;')
//   })

// })
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact');
    cy.injectAxe()
  });
  it('Has no detectable a11y violations on load Contacct page', () => {
    // Test the page at initial load
    cy.checkA11y()
  })
  it("passes", () => {
    cy.get(".input-firstName")
      .should('have.label','First name')
  })

})