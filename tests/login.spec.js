const { test, expect } = require('@playwright/test');
const { Login } = require('../poms/login');

test.describe('Login test', () => {
    test('Login successful', async ({ page }) => {
        const loginPage = new Login(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(loginPage.titleProducts).toBeVisible()
    });

    test('login failed', async ({ page }) => {
        const loginPage = new Login(page);
        await loginPage.goto();
        await loginPage.login('standard_user222', 'secret_sauce');
    });
});
