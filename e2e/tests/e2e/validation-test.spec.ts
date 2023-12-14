import { test, expect } from '@playwright/test';

test.describe('E2E Test', () => {

  test('Rejects invalid email format in registration form', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', 'Password123');
    await page.fill('input[name="confirmPassword"]', 'Password123');
    const emailError = await page.locator('text=Invalid email format').isVisible();
    expect(emailError).toBeTruthy();
  });

  test('Rejects invalid password format in registration form', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', '123'); // Intentionally weak password
    await page.fill('input[name="confirmPassword"]', '123');
    const passwordError = await page.locator('text=Password must be at least 6 characters and contain at least 1 capital letter').isVisible();
    expect(passwordError).toBeTruthy();
  });

  test('Checks if password and confirm password match in registration form', async ({ page }) => {
    await page.goto('http://localhost:4200/register');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.fill('input[name="confirmPassword"]', 'Password1234'); // Different confirm password
    await page.click('button:has-text("Register")');
    const confirmPasswordError = await page.locator('text=Passwords do not match').isVisible();
    expect(confirmPasswordError).toBeTruthy();
  });

  test('Rejects invalid email format in login form', async ({ page }) => {
    await page.goto('http://localhost:4200/login');
    await page.fill('input[name="email"]', 'email');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button:has-text("Login")');
    const emailError = await page.locator('text=Invalid email format').isVisible();
    expect(emailError).toBeTruthy();
  });

});
