const axios = require('axios')

const baseUrl = "https://smile.launch27.com/latest"
const token = "live_JfK0XlqejIKqhsAY6Cr0"

const getBookingForm = async () => {
    const endpoint = "/booking/form"
    const requestUrl = `${baseUrl}${endpoint}`
    console.log(requestUrl)
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: requestUrl,
        headers: { }
      };
      

    const data = await axios.request(config)
        .catch((error) => {
            console.log(error);
            return null
        });


    return data.data;
}

module.exports = {
    getBookingForm
}