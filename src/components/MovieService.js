const axios = require('axios');

export async function getData() {
    const response = await axios.get('https://localhost:44349/home');

    console.log(response);

    return await response.data;
}