const { test, expect} = require('@playwright/test');

const getToken = async (request, username, password) => {
    console.log("inside getToken");
    const baseUrl = 'https://demo.spreecommerce.org';
    let temp = async (request) => {
        console.log("Make a request");
        const response = await request.post(`${baseUrl}/spree_oauth/token`, {
            data: {
                "grant_type": "password",
                "username": username,
                "password": password
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.access_token).toBeTruthy()
        const token = responseBody.access_token
        console.log(token)
        return token;
    };
    await temp(request);
}
export default getToken;