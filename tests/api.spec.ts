import { test, expect } from '@playwright/test';

test('API returns correct user data', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
  expect(data).toHaveProperty('email');
});