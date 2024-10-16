'use client'

import { useQuery } from "@tanstack/react-query";
import { IBooking } from "@/interfaces/IBooking";
import { cancelBooking, getCustomerBookingList } from "@/services/apis/launch27/requests/booking";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from "./data-table";
import { columns } from "./columns";

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
  console.log(item)

  return (
    //     <>
    //       {/* <table className="min-w-full border-collapse border border-gray-200">
    //     <thead>
    //       <tr>
    //         <th className="border border-gray-300 px-4 py-2">Address</th>
    //         <th className="border border-gray-300 px-4 py-2">Status</th>
    //         <th className="border border-gray-300 px-4 py-2">Date</th>
    //         <th className="border border-gray-300 px-4 py-2">Time</th>
    //         <th className="border border-gray-300 px-4 py-2">Frequency</th>
    //         <th className="border border-gray-300 px-4 py-2">Service Type</th>
    //         <th className="border border-gray-300 px-4 py-2">Total Price</th>
    //         <th className="border border-gray-300 px-4 py-2">Total Refunded</th> {/* New Column */}
    //       <th className="border border-gray-300 px-4 py-2">Actions</th>
    //     </tr >
    //     </thead >
    //     <tbody>
    //       <tr>
    //         <td className="border border-gray-300 px-4 py-2">{item?.address?.full_address}</td>
    //         <td className="border border-gray-300 px-4 py-2">{item.completed ? 'Completed' : 'Pending'}</td>
    //         <td className="border border-gray-300 px-4 py-2">{serviceDate.toLocaleDateString()}</td>
    //         <td className="border border-gray-300 px-4 py-2">{startTime} - {hours}h {minutes}m - {endTime}</td>
    //         <td className="border border-gray-300 px-4 py-2">{item.frequency.name}</td>
    //         <td className="border border-gray-300 px-4 py-2">{item.services[0].name}</td>
    //         <td className="border border-gray-300 px-4 py-2">£{item.summary.total.toFixed(2)}</td>
    //         {/* <td className="border border-gray-300 px-4 py-2">£{item.summary.refunded.toFixed(2)}</td> Display Total Refunded */}
    //         <td className="border border-gray-300 px-4 py-2">
    //           {/* <button onClick={() => handlerEdit(item.id)}>Edit</button> */}
    //           {/* <button onClick={() => handlerRebook(item.id)}>Rebook</button> */}
    //           <button onClick={() => handlerCancelBooking(item.id)}>Cancel</button>
    //         </td>
    //       </tr>
    //       {/* Additional rows can go here */}
    //     </tbody>
    //   </table >

    //     <div className="p-4">
    //       hi
    //     </div> */
    // }
    //   </>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  );
}


function BookingList() {

  const bookingList = useQuery({
    queryKey: ['bookingList'],
    queryFn: async () => await getCustomerBookingList()
  })
  // const data = bookingList.data
  const data =[{id: 1}]


  console.log(data)

  return (
    // <Table>
    //   <TableCaption>A list of your recent invoices.</TableCaption>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-[100px]">Invoice</TableHead>
    //       <TableHead>Status</TableHead>
    //       <TableHead>Method</TableHead>
    //       <TableHead className="text-right">Amount</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {data?.map((item) => {
    //       return <CardBookingExcerpt item={item} key={item.id} />
    //     })}
    //   </TableBody>
    // </Table>
    <DataTable data={data} columns={columns} />
  );
}

export default BookingList
