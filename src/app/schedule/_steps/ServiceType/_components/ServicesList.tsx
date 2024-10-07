import useSchedule from "@/context/schedule/useSchedule"

function ServicesList() {
  const { fetchedStepsData, bookingData, setServiceType } = useSchedule()

  console.log("service list")
  return (
    <div className="grid grid-cols-3 gap-4">
      {fetchedStepsData && fetchedStepsData.length !== 0 && fetchedStepsData.map((item) => {
        const isActive = bookingData.services[0].id === item.id
        return (
          <button type="button" onClick={() => setServiceType(item.id)} key={item.id} className={`bg-white ${isActive ? "bg-gray-700" : "bg-white hover:bg-gray-200"} border border-gray-100 p-4 flex items-center justify-between`}>
            <div className="flex items-center align-center space-x-4">
              <span>{item.name}</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default ServicesList
