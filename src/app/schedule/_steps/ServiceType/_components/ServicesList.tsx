import useSchedule from "@/context/schedule/useSchedule"

function ServicesList() {
  const { fetchedStepsData, selectedServiceId, setSelectedServiceId } = useSchedule()
  const data = Object.values(fetchedStepsData)

  return (
    <div className="grid grid-cols-2 gap-4">
      {data && data.length !== 0 && data.map((item) => {
        const isActive = selectedServiceId === item.id
        return (
          <button type="button" onClick={() => setSelectedServiceId(item.id)} key={item.id} className={`${isActive ? "text-white bg-gray-700" : "bg-white hover:bg-gray-200"} border border-gray-100 p-4 flex items-center justify-between`}>
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
