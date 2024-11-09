import useSchedule from "@/context/schedule/useSchedule"
import ItemService from "./ItemService"

function ServicesList() {
  const { fetchedStepsData, selectedServiceId, setSelectedServiceId } = useSchedule()
  const data = Object.values(fetchedStepsData)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Service Type</h2>
      <div className="grid grid-cols-2 gap-4">
        {data && data.length !== 0 && data.map((item) => {
          const isActive = selectedServiceId === item.id
          return <ItemService item={item} isActive={isActive} onClick={() => setSelectedServiceId(item.id)} />
        })}
      </div>
    </div>
  )
}

export default ServicesList
