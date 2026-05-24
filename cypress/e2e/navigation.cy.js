describe("Navigation Tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it('Clicking on "Card Set" navigation to the card sets page', () => {
    cy.get('#cardSetPage').click();
    cy.get('.setContainer').should('be.visible');

    cy.get('[data-cy="study-set-header"]').should('exist'); 
    
    cy.get('.cardSets').should('have.length.at.least', 1);
  });

  it('Clicking on "About" navigation to the about page', () => {
    cy.get('#aboutPage').click();
    cy.get('.aboutContainer').should('be.visible');
    cy.get('[data-cy="about_page"]').should('exist');
  });

  it('Clicking on "Home" navigation to the home page', () => {
    cy.get('#homePage').click();
    cy.get('.homeContainer').should('be.visible');
    cy.get('[data-cy="home_header"]').should('exist');
  });

});