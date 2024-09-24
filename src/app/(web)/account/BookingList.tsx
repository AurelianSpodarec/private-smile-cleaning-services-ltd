'use client'

import { getBookingList, getBookingListCount, getBookingSettings, getCustomerBookingList, getSettings } from "@/services/apis/launch27/requests/bookings";
import { useQuery } from "@tanstack/react-query";

const objectMap = (obj, callback) => {
  if(!obj) return
  return Object.entries(obj).map(([key, value]) => {
    return callback(key, value);
  });
};

function BookingList() {

  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  const data = bookingList.data

  console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", data)

  return (
    <div>
      BookingList
      {data?.map((item) => {
        return (
          <div>
            {item.id}
          </div>
        )
      })}
    </div>
  );
}

export default BookingList
