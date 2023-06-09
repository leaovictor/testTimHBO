describe('Teste e2e, login na HBO usando o TIMLive e TIM', () => {


  it('Deve logar na TIM com sucesso!', () => {
    cy.visit('https://www.hbomax.com/br/pt')
    cy.viewport(1920, 1080)
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.d-none > .secondary-cta > .sc-pGacB').click();
    cy.get('[data-testid="ProviderButton"] > :nth-child(1) > .css-1rynq56').click();
    let provedor = Cypress.env('provedor');
    cy.get('.ce__ProviderPicker__searchProviderClass').type(provedor, {log: false});
    cy.title().should('include', 'HBO Max')
    cy.contains('TIM').click({force: true});
    cy.wait(3000)
    cy.url().then(url => {
      cy.log('URL atual: ' + url);
    });
    cy.title().then(title => {
      cy.log('Título da página atual: ' + title);
    });
  })

<<<<<<< HEAD:cypress/e2e/login.cy.js
  it('Deve logar na TIM Live com sucesso!', () => {

    const cpf = Cypress.env('cpf')
    const senha = Cypress.env('senha')
    const provedor = Cypress.env('provedor')

=======
  it.only('Deve logar na TIM Live com sucesso!', () => {
>>>>>>> parent of 6fac9b9 (fisrt commit):cypress/e2e/spec.cy.js
    cy.visit('https://www.hbomax.com')
    cy.viewport(1920, 1080)
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.d-none > .secondary-cta > .sc-pGacB').click();
    cy.get('[data-testid="ProviderButton"] > :nth-child(1) > .css-1rynq56').click();
<<<<<<< HEAD:cypress/e2e/login.cy.js
    cy.get('.ce__ProviderPicker__searchProviderClass').type(provedor, {log: false});
=======
    cy.get('.ce__ProviderPicker__searchProviderClass').clear('t');
    cy.get('.ce__ProviderPicker__searchProviderClass').type('tim');


>>>>>>> parent of 6fac9b9 (fisrt commit):cypress/e2e/spec.cy.js
    cy.wait(5000)

    cy.contains('TIM Live').trigger('touchstart').trigger('touchend');
<<<<<<< HEAD:cypress/e2e/login.cy.js
    cy.title().should('include', 'HBO Max')
    cy.contains('TIM Live').click( {force: true});
    cy.get('#cpf').type(cpf, {log: false});
    cy.get(':nth-child(2) > .form-control').type(senha, {log: false});
=======

    /* ==== Generated with Cypress Studio ==== */

    cy.contains('TIM Live').click();

    cy.get('#cpf').clear('0');
    cy.get('#cpf').type('013.482.884-42');
    cy.get(':nth-child(2) > .form-control').clear('6');
    cy.get(':nth-child(2) > .form-control').type('6515');
>>>>>>> parent of 6fac9b9 (fisrt commit):cypress/e2e/spec.cy.js
    cy.get('#signin').click();
    cy.get('#terms').should('be.enabled');
    cy.get('#terms').should('be.visible');
    cy.get('#terms').check();
    cy.get('#terms').should('be.checked');
    cy.get('#submitButton').should('have.id', 'submitButton');
    cy.get('#submitButton').should('be.visible');
    cy.get('#submitButton').should('be.enabled'); // O botão deveria estar liberado para eu clicar, mas não está funcionando como deveria


  })
})