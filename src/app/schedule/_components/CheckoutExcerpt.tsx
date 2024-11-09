import useSchedule from "@/context/schedule/useSchedule";

function CheckoutExcerpt() {

  // const {  } = useSchedule()

  return (
    <aside className="shadow p-6 w-full">
      <h3 className="text-lg font-medium text-gray-900">Booking Summary</h3>

      

      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <dt className="text-base">Total</dt>
        <dd className="text-base">-</dd>
      </div>
    </aside>
  );
}

export default CheckoutExcerpt
