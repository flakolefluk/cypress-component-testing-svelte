import App from './App.svelte';
import { mount } from 'cypress-svelte-unit-test';
describe('App', function () {
  it('renders App with correct heading', () => {
    mount(App);
    cy.findByRole('heading', { level: 1, name: /hello typescript/i }).should(
      'exist'
    ).should('be.visible');
  });
});
