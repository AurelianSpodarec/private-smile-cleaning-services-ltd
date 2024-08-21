const axios = require('axios')


const inferBaseUrl = () => {
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;

        if (hostname === 'smile.cleaning') {
            return "https://smile.launch27.com/latest";
        } else if (hostname === 'staging.smile.cleaning' || hostname === 'localhost') {
            return "https://smile-sandbox.launch27.com/latest";
        }
    }
    return "https://smile.launch27.com/latest";
};

const inferToken = () => {
    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;

        if (hostname === 'smile.cleaning') {
            return "live_JfK0XlqejIKqhsAY6Cr0";
        } else if (hostname === 'staging.smile.cleaning' || hostname === 'localhost') {
            return "sandbox_gxgtsLJIsDSuxtubStfw";
        }
    }
    return "sandbox_gxgtsLJIsDSuxtubStfw";
}

const baseUrl = inferBaseUrl()
const token = inferToken()

const getSettings = async () => {
    const endpoint = "/settings"
    const requestUrl = `${baseUrl}${endpoint}`

    const settings = await axios.get(requestUrl)
        .catch((error) => {
            console.error(error)
            return null;
        })

    return settings
}

const getServices = () => {
    const endpoint = "/booking/services"
    const requestUrl = `${baseUrl}${endpoint}`

    const services = axios.get(requestUrl)

    return services
}

const getFrequencies = () => {
    const endpoint = "/booking/frequencies"
    const requestUrl = `${baseUrl}${endpoint}`

    const frequencies = axios.get(requestUrl)

    return frequencies
}

const getBookingSpots = (date, days, mode) => {
    const endpoint = "/booking/spots"
    const requestUrl = `${baseUrl}${endpoint}`

    const spots = axios.post(requestUrl, {
        date,
        days,
        mode
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return spots
}

const getCustomFields = () => {
    const endpoint = "/booking/custom_fields"
    const requestUrl = `${baseUrl}${endpoint}`

    const customFields = axios.get(requestUrl)

    return customFields
}

const sendBooking = (bookingData) => {
    const endpoint = "/booking"
    const requestUrl = `${baseUrl}${endpoint}`

    const bookingResult = axios.post(requestUrl, bookingData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return bookingResult
}

module.exports = {
    getServices,
    getSettings,
    getFrequencies,
    getBookingSpots,
    getCustomFields,
    sendBooking
}