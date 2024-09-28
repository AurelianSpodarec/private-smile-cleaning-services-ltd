'use client'

import { useQuery } from "@tanstack/react-query";
import { IBooking } from "@/interfaces/IBooking";
import { getCustomerBookingList } from "@/services/apis/launch27/requests/booking";

function CardBookingExcerpt({ item }: { item: IBooking }) {
  console.log(item)

  return (
    <div>

      {/* {item?.services[0].name} */}
      <div>

      </div>
      {/* {item.services[0]} */}
      {/* {item.service_date}
      {item.arrival_window}
      {item.duration}
      {item.address.street}
      {item.address.city}

      {item.active} {item.completed}

      Price {item?.summary?.total} */}

      {/* <button>Rebook</button> */}
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
