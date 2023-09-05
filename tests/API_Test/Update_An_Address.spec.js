// const { test, expect } = require('@playwright/test');

// test.describe('API Testing', () => {
//     const baseUrl = 'https://demo.spreecommerce.org';
//     test('POST Request - Update an Address', async ({ request }) => {
//         console.log(token)
//         const response = await request.patch(`${baseUrl}/api/v2/storefront/account/addresses/${id}`, {

//             headers: {
//                 'Content-Type': 'application/vnd.api+json',
//                 'Authorization': `Bearer ${token}`,
//             },
//             data:
//             {
//                 "address": {
//                     firstname: "Playwright",
//                     lastname: "Test",
//                     address1: "HSR",
//                     address2: "2nd Floor",
//                     city: "Bethesda",
//                     phone: "3014445002",
//                     zipcode: "20814",
//                     state_name: "MD",
//                     country_iso: "US"
//                 },
//             }
//         })

//         const responseBody = JSON.parse(await response.text())
//         console.log(responseBody);
//         expect(response.status()).toBe(200);

//         expect(responseBody.data.attributes.address1).toBe('HSR')
//         expect(responseBody.data.attributes.firstname).toBe('Playwright')
//     })
// })