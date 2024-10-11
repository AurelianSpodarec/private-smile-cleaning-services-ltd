const scheduleState = {
  booking_type: "default",
  payment_method: "cash",
  // "payment_method": "stripe",
  // "card_cvc": "321",
  // "card_expires": "10/27",
  // "card_number": "4242424242424242",
  // "stripe_token": "pk_test_51PFYyyDHh5fcObfcpESlkFB9FMIyAfrVuR2hUFzBTqWpRii6TctHaGlKWFQYkw0Lt7ts9Xkd7PRe0h73NMhGdJiV00ec4hkerq",
  user: {
    first_name: "",
    last_name: "",
    email: "",
  },
  address: "",
  city: "",
  zip: "",

  phone: "",
  location_id: 1,

  frequency_id: 1,
  service_date: "2024-10-02T12:00:00",
  arrival_window: null,
  discount_code: null,



  services: [
    {
      id: null,
      hourly: null,
      extras: [],
      pricing_parameters: [],
    },
  ],

  custom_fields: [
    {
      id: 255,
      values: [],
    },
  ],
  meta: [
    {
      code: "form",
      value: "widget",
    },
  ],
}

export default scheduleState
