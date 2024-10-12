'use client'

import { useQuery } from "@tanstack/react-query";
import { IBooking } from "@/interfaces/IBooking";
import { cancelBooking, getCustomerBookingList } from "@/services/apis/launch27/requests/booking";

function CardBookingExcerpt({ item }: { item: IBooking }) {
  const serviceDate = new Date(item.service_date);

  const startTime = serviceDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = new Date(serviceDate.getTime() + item.duration * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const hours = Math.floor(item.duration / 60);
  const minutes = item.duration % 60;

  async function handlerCancelBooking(id) {
    const data = {
      "confirmed_late": true,
    }
    const a = await cancelBooking({ id, data })

    console.log("cancel", a)
  }

  return (
    <div className="my-4 border">
      <h3>Booking Details</h3>
      <div>
        <strong>Date:</strong> {serviceDate.toLocaleDateString()}
      </div>
      <div>
        <strong>Address/Location:</strong> {item.location.name} {/* or full address */}
      </div>
      <div>
        <strong>From:</strong> {startTime} <strong>To:</strong> {endTime}
      </div>
      <div>
        <strong>Duration:</strong> {hours}h {minutes}m
      </div>
      <div>
        <strong>Frequency:</strong> {item.frequency.name}
      </div>
      <div>
        <strong>Service Type:</strong> {item.services[0].name}
      </div>
      <div>
        <strong>Service Price:</strong> £{item.services[0].price.toFixed(2)}
      </div>
      <div>
        <strong>Status:</strong> {item.completed ? 'Completed' : 'Pending'}
      </div>
      <div>
        <strong>Total Price:</strong> £{item.summary.total.toFixed(2)}
      </div>
      <div>
        <button>Edit</button>
        <button onClick={() => handlerCancelBooking(item.id)}>Cancel</button>
      </div>
    </div>
  );
}


function BookingList() {

  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  const data = bookingList.data


  console.log(data)

  return (
    <div>
      {data?.map((item) => {
        return <CardBookingExcerpt item={item} key={item.id} />
      })}
    </div>
  );
}

export default BookingList
