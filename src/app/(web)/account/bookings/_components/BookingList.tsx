'use client'

import { getCustomerBookingList } from "@/services/apis/launch27/requests/bookings";
import { useQuery } from "@tanstack/react-query";

function CardBookingExcerpt({ item }) {
  return (
    <div>
        {item.service_date}
        {item.duration}
        Address
        From till
        Price {item?.summary?.total}
    </div>
  )
}

function BookingList() {

  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  const data = bookingList.data

  return (
    <div>
      {data?.map((item) => {
        return <CardBookingExcerpt item={item} key={item.id} />
      })}
    </div>
  );
}

export default BookingList
