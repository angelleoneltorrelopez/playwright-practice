const { test, expect } = require('@playwright/test');
const { Login } = require('../poms/login');

test.describe('Login test', () => {
    test('Login successful', async ({ page }) => {
        const loginPage = new Login(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(loginPage.titleProducts).toBeVisible()
    });

    test('Login failed', async ({ page }) => {
        const loginPage = new Login(page);
        await loginPage.goto();
        await loginPage.login('standard_user222', 'secret_sauce');
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('User blocked', async ({ page }) => {
        const loginPage = new Login(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});
