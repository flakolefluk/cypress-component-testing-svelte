import Counter from './Counter.svelte';
import { mount } from 'cypress-svelte-unit-test';
describe('Counter', function () {
  it('Renders button and updates count when clicked', () => {
    mount(Counter);
    cy.findByRole('button', { name: 'Clicks: 0' }).should('exist');
    cy.findByRole('button', { name: /Click/i }).click();
    cy.findByRole('button', { name: 'Clicks: 1' }).should('exist');
  });
});
