describe('Teste e2e, login na HBO usando o TIMLive e TIM', () => {


  it('Deve logar na TIM com sucesso!', () => {
    cy.visit('https://www.hbomax.com/br/pt')
    cy.viewport(1920, 1080)
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.d-none > .secondary-cta > .sc-pGacB').click();
    cy.get('[data-testid="ProviderButton"] > :nth-child(1) > .css-1rynq56').click();
    cy.get('.ce__ProviderPicker__searchProviderClass').clear('t');
    cy.get('.ce__ProviderPicker__searchProviderClass').type('tim');
    cy.contains('TIM').click({force: true});
  })

  it.only('Deve logar na TIM Live com sucesso!', () => {

    const cpf = Cypress.env('cpf')
    const senha = Cypress.env('senha')
    const provedor = Cypress.env('provedor')

    cy.visit('https://www.hbomax.com')
    cy.viewport(1920, 1080)
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.d-none > .secondary-cta > .sc-pGacB').click();
    cy.get('[data-testid="ProviderButton"] > :nth-child(1) > .css-1rynq56').click();
    cy.get('.ce__ProviderPicker__searchProviderClass').type(provedor);
    cy.wait(5000)
    cy.contains('TIM Live').trigger('touchstart').trigger('touchend');
    /* ==== Generated with Cypress Studio ==== */
    cy.contains('TIM Live').click({force: true});
    cy.get('#cpf').clear('0');
    cy.get('#cpf').type(cpf);
    cy.get(':nth-child(2) > .form-control').type(senha);
    cy.get('#signin').click();
    cy.get('#terms').should('be.enabled');
    cy.get('#terms').should('be.visible');
    cy.get('#terms').check();
    cy.get('#terms').should('be.checked');
    cy.get('#submitButton').should('have.id', 'submitButton');
    cy.get('#submitButton').should('be.visible');
    cy.get('#submitButton').should('be.enabled'); // O botão deveria estar liberado para eu clicar mas não está funcionando como deveria

    /* ==== End Cypress Studio ==== */
  })
})