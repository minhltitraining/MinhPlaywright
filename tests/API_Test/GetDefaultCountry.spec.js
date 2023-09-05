const { test, expect } = require('@playwright/test')
import getToken from './BaseTest';
let token;
let username = "minh@spree.com";
let password = "123456";


test.beforeAll(async ({ request }) => {
  token = await getToken(request, username, password);
  console.log("Inside before all")
  console.log(token);
})
test.describe('API Testing', () => {
  const baseUrl = 'https://demo.spreecommerce.org'


  test('Get Default Country', async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/v2/storefront/countries/default`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    //expect(response.status()).toBe(200)
    expect(responseBody.data.attributes.iso_name).toBe('UNITED STATES')
    expect(responseBody.data.attributes.name).toBe('United States')
  })
})