'use client'

import { getBookingList, getBookingListCount, getBookingSettings, getCustomerBookingList, getSettings } from "@/services/apis/launch27/requests/bookings";
import { useQuery } from "@tanstack/react-query";

function BookingList() {

  // const bookingList = useQuery({
  //   queryKey: ['bookingList'],
  //   queryFn: async () => await getBookingList()
  // })

  const a = useQuery({
    queryKey: ['a'],
    queryFn: async () => await getCustomerBookingList()
  })

  console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", a.data)

  return (
    <div>
      BookingList
      {/* {bookingList.data?.map((item) => {
        return (
          <div>
            {item.company_name}
          </div>
        )
      })} */}

    </div>
  );
}

export default BookingList
