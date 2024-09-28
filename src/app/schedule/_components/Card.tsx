'use client';

import { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createBooking, createBooking as createBookingAPI } from "@/services/apis/launch27/requests/booking"
import StepPropertyType from "../_steps/PropertyType";
import StepLocation from "../_steps/Location";
import StepRooms from "../_steps/Rooms";
import StepCleaningProducts from "../_steps/CleaningProducts";



// // Or directly into service with category "4 and 5"
// const serviceSteps = {
//   "residential-property": [4, 6, 2, 6],
//   ironing: [4, 6, 2, 5],
// }




// // const steps = [
// //   {
// //     id: 1,
// //     name: "Choose a Cleaning Service"
// //   },
// //   {
// //     id: 1,
// //     name: "Home Location"
// //   },
// //   {
// //     id: 2,
// //     name: "Cleaning Rooms"
// //   },
// // ];

// const propertyData = [
//   {

//   }
// ]






// const servicesData = [

//   {
//     id: 15,
//     name: "Premium Time Slot"
//   },


//   {
//     id: 16, // standarlone 
//     name: "Do you have pets?"
//   },



//   {
//     id: 11,
//     name: "Deep Cleaning"
//   },
//   {
//     id: 13,
//     name: "Move In / Move Out",
//   },



//   {
//     id: 1,
//     name: "Fridge Cleaning"
//   },
//   {
//     id: 9,
//     name: "Oven Cleaning",
//   },
//   {
//     id: 14,
//     name: "Kitchen Cabinet Cleaning"
//   },
//   {
//     id: 12,
//     name: "Ironing (30min)",
//   },
//   {
//     id: 17,
//     name: "ECO-Friendly Cleaning Products",
//   }
// ]


// // pricing parameters
// const rooms = [
//   {
//     id: 6,
//     name: "Bedrooms",
//     icon: <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       className="w-8 h-8"
//       viewBox="0 0 640 512"
//     >
//       <path d="M32 32c17.7 0 32 14.3 32 32v256h224V160c0-17.7 14.3-32 32-32h224c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32zm144 96a80 80 0 110 160 80 80 0 110-160z"></path>
//     </svg>
//   },
//   {
//     id: 3,
//     name: "Bathrooms",
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//       <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm0-128a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm0-128a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm32-32a32 32 0 100-64 32 32 0 100 64z"></path>
//     </svg>
//   },
//   {
//     id: 4,
//     name: "Kitchens",
//     icon: <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       className="w-8 h-8"
//       viewBox="0 0 24 24"
//     >
//       <path d="M7 4v17M4 4v3a3 3 0 106 0V4M14 8a3 4 0 106 0 3 4 0 10-6 0M17 12v9"></path>
//     </svg>
//   },
//   {
//     id: 2,
//     name: "Reception / Office / Dining Rooms",
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
//       <path d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24H152c-13.3 0-24-10.7-24-24v-56h384v56c0 13.3-10.7 24-24 24zM128 400v-64h384v64H128zm0-96v-80h384v80H128z"></path>
//     </svg>
//   },
//   {
//     id: 5,
//     name: "Other Rooms",
//     icon: <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       fill="currentColor"
//       className="w-8 h-8"
//       viewBox="0 0 16 16"
//     >
//       <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"></path>
//       <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117M11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5M4 1.934V15h6V1.077z"></path>
//     </svg>
//   },
//   {
//     id: 1,
//     name: "30 Minutes of Cleaning",
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//       <path d="M464 256a208 208 0 11-416 0 208 208 0 11416 0zM0 256a256 256 0 10512 0 256 256 0 10-512 0zm232-136v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
//     </svg>
//   }
// ]

// const a = [
//   {
//     id: "service-type",
//     services: [
//       {
//         "Residential Property": 5,
//         "End of Tenancy": 4,
//         "Ironing": 4
//       }
//     ]
//   }
// ]


// [
//   {
//     id: "service-type",
//     services: [
//       {
//         "Residential Property": 5,
//         "End of Tenancy": 4,
//         "Ironing": 4
//       }
//     ]
//   },
//   {
//     services: [
//       ""
//     ]
//   }
// ]




// BookingCard Component
function BookingCard({ children }) {
  // const [bookingData, setBookingData] = useState(
  //   {
  //     "user": {
  //       "first_name": "Terry",
  //       "last_name": "Test",
  //       "email": "tetetetemmmm@gmail.com"
  //     },
  //     "address": "12 Kirk Road",
  //     "city": "London",
  //     "zip": "E17 8PD",
  //     "phone": "07851669648",
  //     "location_id": 1,
  //     "frequency_id": 1,
  //     "service_date": "2024-10-02T12:00:00",
  //     "arrival_window": 120,
  //     "discount_code": null,
  //     "services": [
  //       {
  //         "id": 7,
  //         "hourly": null,
  //         "extras": [
  //           {
  //             "id": 2,
  //             "quantity": 3
  //           }
  //           // {
  //           //     "id":{{extra_oven_id}},
  //           //     "quantity":1
  //           // },
  //           // {
  //           //     "id":{{extra_deep_id}},
  //           //     "quantity":1
  //           // },
  //           // {
  //           //     "id":{{extra_ironing_id}},
  //           //     "quantity":3
  //           // },
  //           // {
  //           //     "id":{{extra_move_id}},
  //           //     "quantity":1
  //           // },
  //           // {
  //           //     "id":{{extra_kitchen_cabinets_id}},
  //           //     "quantity":1
  //           // },
  //           // {
  //           //     "id":{{extra_pets_id}},
  //           //     "quantity":1
  //           // },
  //         ],
  //         "pricing_parameters": [
  //           {
  //             "id": 3,
  //             "quantity": 0
  //           }
  //           // {
  //           //     "id":{{residential_bathrooms_id}},
  //           //     "quantity":0
  //           // },
  //           // {
  //           //     "id":{{residential_kitchens_id}},
  //           //     "quantity":0
  //           // },
  //           // {
  //           //     "id":{{residential_other_rooms_id}},
  //           //     "quantity":0
  //           // },
  //           // {
  //           //     "id":{{residential_bedrooms_id}},
  //           //     "quantity":1
  //           // }
  //         ]
  //       }
  //     ],
  //     "payment_method": "cash",
  //     // "payment_method": "stripe",
  //     // "card_cvc": "321",
  //     // "card_expires": "10/27",
  //     // "card_number": "4242424242424242",
  //     // "stripe_token": "pk_test_51PFYyyDHh5fcObfcpESlkFB9FMIyAfrVuR2hUFzBTqWpRii6TctHaGlKWFQYkw0Lt7ts9Xkd7PRe0h73NMhGdJiV00ec4hkerq",
  //     "custom_fields": [
  //       {
  //         "id": 255,
  //         "values": [
  //           {
  //             "id": 1,
  //             "other": null
  //           }
  //         ]
  //       }
  //     ],
  //     "sms_notifications": false,
  //     "meta": [
  //       {
  //         "code": "form",
  //         "value": "widget"
  //       }
  //     ],
  //     "booking_type": "default"
  //   }
  // );

  // // This function is for creating a booking
  // const createBookingConst = async () => {
  //   try {
  //     console.log("bo", bookingData)
  //     const response = await createBooking(bookingData);
  //     console.log(response)
  //     return response;
  //   } catch (error) {
  //     throw new Error('Error creating booking: ' + error.message);
  //   }
  // };

  // // Using useMutation to handle booking creation
  // const mutation = useMutation({
  //   mutationFn: createBookingConst, // Call the createBooking function
  //   onSuccess: (data) => {
  //     console.log('Booking created successfully:', data);
  //     // Optionally, you can trigger a refetch or navigate to another page
  //   },
  //   onError: (error) => {
  //     console.error('Error creating booking:', error);
  //   },
  // });

  // const updateBookingData = (key, value) => {
  //   setBookingData((prevData) => ({
  //     ...prevData,
  //     [key]: value,
  //   }));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   mutation.mutate(); // Call the mutation to create a booking
  // };

  return (
    <article className="bg-white p-4 rounded-lg border min-w-[480px]">
      <header>
        <h2 className="text-2xl font-semibold">Choose a Cleaning Service</h2>
      </header>
      <section>

        {children}

        <div className="flex flex-col space-y-4">
          {/* {serviceType.map((item) => {
            return (
              <button type="button" className="bg-white hover:bg-gray-200 border border-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center align-center space-x-4">
                  <span className="h-6 w-6">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                <svg className="w-4 h-4" viewBox="0 0 320 512">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                </svg>
              </button>
            )
          })} */}
        </div>






        {/* Render steps and any necessary form inputs here */}
        {/* Example input: */}
        {/* <input
          type="text"
          value={bookingData.address}
          onChange={(e) => updateBookingData('address', e.target.value)}
          placeholder="Address"
        /> */}
        {/* Add more fields as necessary */}
      </section>
      {/* <footer className="flex justify-between items-center">
        <span>Total: £234</span>
        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Creating...' : 'Next'}
          </button>
        </form>
      </footer> */}
      {/* {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Booking created successfully!</div>} */}
    </article>
  );
}

export default BookingCard;
