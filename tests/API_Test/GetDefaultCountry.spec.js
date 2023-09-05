const { test, expect }= require('@playwright/test')
import getToken from './BaseTest';
test.describe('API Testing', () => {
  const baseUrl = 'https://demo.spreecommerce.org'

  test.beforeAll(async ({request})=> {
    await getToken(request, "minh@spree.com", "123456");
  })

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