'use client'

import { useQuery } from "@tanstack/react-query";
import { getCustomerBookingList } from "@/services/apis/launch27/requests/booking";
import CardExceptBooking from "./CardExcerptBooking";

function BookingList() {
  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  const data = bookingList.data

  return (
    <div>
      {data?.map((item) => {
        return <CardExceptBooking item={item} key={item.id} />
      })}
    </div>
  );
}

export default BookingList
