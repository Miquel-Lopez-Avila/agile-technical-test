describe('Search in Home page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173/')
  })

  it('visit the local website', () => {
    cy.get('[data-testid="search"]').type('dog')
    cy.get('[data-testid="submit-button"]').click()
    cy.url().should('include', 'search')
    cy.get('[data-testid="search-container"]').should('be.visible')
  })
})