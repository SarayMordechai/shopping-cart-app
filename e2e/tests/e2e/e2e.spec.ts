import { test, expect } from '@playwright/test';

test.describe('E2E Test', () => {

  test('Complete Registration, Login, and Add to Cart Flow', async ({ page }) => {
    // Registration
    await page.goto('http://localhost:4200/register');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.fill('input[name="confirmPassword"]', 'Password123');
    await page.click('button:has-text("Register")');
    await expect(page).toHaveURL('http://localhost:4200/login');

    // Login
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button:has-text("Login")');
    await expect(page).toHaveURL('http://localhost:4200/products');

    // Add a product to the cart
    await page.click('button:has-text("Add")');
    await page.click('a:has-text("Cart")');
    await expect(page.locator('div.cart-item')).toHaveCount(1);
  });

});
