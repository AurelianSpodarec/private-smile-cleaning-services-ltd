'use client'

import { useQuery } from "@tanstack/react-query";
import { getCustomerBookingList } from "@/services/apis/launch27/requests/booking";
import CardExceptBooking from "./CardExcerptBooking";
import Invoice from "./Invoice";

function BookingList() {
  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  const data = bookingList.data

  return (
    <div>

      {/* <Invoice /> */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-4">
        <div>
          <h3 className="text-lg font-semibold">Service Information</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Schedule Information</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Total</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Frequency</h3>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Status</h3>
        </div>
      </div>
      {data?.map((item) => {
        return <CardExceptBooking item={item} key={item.id} />
      })}
    </div>
  );
}

export default BookingList
