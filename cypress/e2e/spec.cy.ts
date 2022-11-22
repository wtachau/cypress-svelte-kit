import { printEnv } from '$lib/test';

describe('spec', () => {
	it('should run a test', () => {
		cy.visit('/');
		printEnv();
	});
});
