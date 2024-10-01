'use client';

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
