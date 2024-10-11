export interface IExtra {
  id: number
  name: string
  price: number
  quantity_based: boolean
  duration?: number
  ordering: number
  description?: string
  recurring?: boolean | null
  discount_by_frequency: boolean
  discount_by_code: boolean
}

export interface IPricingParameter {
  id: number
  type: string
  name: string
  price: number
  quantity_minimum: number
  quantity_maximum: number
  duration: number
  ordering: number
}

export interface ITagInfo {
  id: number
  type: string
  name: string
  color?: string | null
  ordering: number
}

export interface IService {
  id: number
  name: string
  price: number
  duration?: number
  commercial: boolean
  discount_by_frequency: boolean
  discount_by_code: boolean
  extras?: IExtra[]
  pricing_parameters?: IPricingParameter[]
  tags_info: ITagInfo[]
}
