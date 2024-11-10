import { IBooking } from "@/interfaces/IBooking";
import { formatBritishDate } from "@/lib/utils";
import { cancelBooking } from "@/services/apis/launch27/requests/booking";

function CardExceptBooking({ item }: { item: IBooking }) {
  const serviceDate = new Date(item.service_date);

  const startTime = serviceDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = new Date(serviceDate.getTime() + item.duration * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const hours = Math.floor(item.duration / 60);
  const minutes = item.duration % 60;

  const serviceName = item.services[0].name
  const address = item?.address?.full_address
  const readableServiceDate = formatBritishDate(serviceDate)

  // Functions
  // ===============================================

  async function handlerCancelBooking(id) {
    const data = {
      "confirmed_late": true,
    }
    const a = await cancelBooking({ id, data })

    console.log("cancel", a)
  }
  console.log(item)

  return (
    <article className="my-4 border border-gray-200 rounded-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">

        <div className="flex items-center space-x-2">
          <svg className="w-12 h-12 bg-[#96769f] p-3 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"></path>
          </svg>
          <div>
            <span className="font-bold">{serviceName}</span>
            <h2>{address}</h2>
          </div>
        </div>

        <div className="flex flex-col">
          <span>{readableServiceDate}</span>
          <div>
            <span>{startTime}</span>
            <strong> ----- {hours}h {minutes}m ----- </strong>
            <span>{endTime}</span>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"> */}
          <div className="flex">
            <span>£{item.summary.total.toFixed(2)}</span>
          </div>

          <div className="flex">
            <span>{item.frequency.name}</span>
          </div>

          <div className="flex">
            <span className={`rounded-lg px-3 py-1.5 ${item.completed ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"} `}>
              {item.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
        {/* </div> */}

        <div className="flex justify-center items-center">
          <button onClick={() => handlerCancelBooking(item.id)}>
            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
              <path d="M64 360a56 56 0 100 112 56 56 0 100-112zm0-160a56 56 0 100 112 56 56 0 100-112zm56-104A56 56 0 108 96a56 56 0 10112 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardExceptBooking
