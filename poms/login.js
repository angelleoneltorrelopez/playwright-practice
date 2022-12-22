const { expect } = require('@playwright/test');
exports.Login = class Login {

    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('[id="user-name"]');
        this.passwordInput = page.locator('[id="password"]');
        this.submitButton = page.locator('input[type="submit"]');
        this.titleProducts = page.locator('span', { hasText: 'Products' })
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
      }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
