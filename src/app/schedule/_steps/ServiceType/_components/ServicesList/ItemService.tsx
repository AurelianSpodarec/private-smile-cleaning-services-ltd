interface IItemService {
  item: any
  isActive: boolean
  onClick: () => void
}

function ItemService({ item, isActive, onClick }: IItemService) {
  return (
    <button type="button" onClick={onClick} key={item.id} className={`${isActive ? "text-white bg-gray-700" : "bg-white hover:bg-gray-200"} border border-gray-100 p-4 flex items-center justify-between`}>
      <div className="flex items-center align-center space-x-4">
        <span>{item.name}</span>
      </div>
    </button>
  )
}

export default ItemService
