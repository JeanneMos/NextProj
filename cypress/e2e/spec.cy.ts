describe("template spec", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/contact");
		cy.injectAxe();
	});
	it("Has no detectable a11y violations on load Contacct page", () => {
		// Test the page at initial load
		cy.checkA11y();
	});
	describe("Inputs", () => {
		it("should have labels", () => {
			cy.get('input[data-testid="input-firstname"]')
				.prev()
				.should("have.text", "Prénom");
		});
		it("should have outline on focus", () => {
			cy.get('input[data-testid="input-firstname"]')
				.focus()
				.should("have.css", "outline", "rgb(118, 118, 118) solid 2px");
			cy.get('input[data-testid="input-lastname"]')
				.focus()
				.should("have.css", "outline", "rgb(118, 118, 118) solid 2px");
		});
	});
});
