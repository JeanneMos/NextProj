
beforeEach(() => {
  cy.visit('http://localhost:3000');
  cy.injectAxe()

})
describe('template spec', () => {
  it('Has no detectable a11y violations on load', () => {

    // Test the page at initial load
    cy.checkA11y()
  })
  // it('passes', () => {
  //    cy.get('.input-name')
  //    .should('have.label')
  //    .prev().should('have.attr', 'style', 'color: orange;')
  // })

})