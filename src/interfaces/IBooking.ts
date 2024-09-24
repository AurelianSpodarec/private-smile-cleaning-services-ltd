export interface ILocation {
  id: number;
  name: string;
  active: boolean;
  default: boolean;
  postcodes: string[];
}

export interface IAddress {
  full_address: string;
  street: string;
  city: string;
  state: string | null;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface IFrequency {
  id: number;
  interval: string;
  name: string;
  percent: number;
}

export interface IPaymentMethodInfo {
  code: string;
}

export interface IPricingParameter {
  id: number;
  type: string;
  name: string;
  quantity: number;
  price: number;
  total?: number;
}

export interface IExtra {
  id: number;
  name: string;
  quantity: number;
  quantity_based: boolean;
  price: number;
  total: number;
  description: string;
  recurring: boolean;
  discount_by_frequency: boolean;
  discount_by_code: boolean;
}

export interface IService {
  id: number;
  name: string;
  price: number;
  extras: IExtra[] | null;
  pricing_parameters: IPricingParameter[];
  commercial: boolean;
  discount_by_frequency: boolean;
  discount_by_code: boolean;
  tags_info: { id: number; type: string; name: string; color: string | null; ordering: number }[];
}

export interface ICustomFieldValue {
  id: number;
  name: string;
  label: string;
  other: string;
}

export interface ICustomField {
  id: number;
  title: string;
  type: string;
  values: ICustomFieldValue[];
  value?: string; // Only for single line type
}

export interface ITax {
  before_tax: number;
  tax_percent: number;
  tax_amount: number;
  after_tax: number;
}

export interface ISummary {
  services: number;
  pricing_parameters: number;
  extras: number;
  discount: number;
  adjustment: number;
  adjustment_after_tax: boolean;
  revenue: number;
  tax: ITax;
  tip: number;
  total: number;
}

export interface IActions {
  edit: boolean;
  cancel: boolean;
  late_cancel: boolean;
  recurring_cancel: boolean;
  complete: boolean;
}

export interface IBooking {
  id: number;
  location: Location;
  digest: string;
  service_date: string;
  arrival_window: number;
  address: IAddress;
  active: boolean;
  completed: boolean;
  name: string;
  company_name: string | null;
  email: string;
  phone: string;
  frequency: IFrequency;
  payment_method_info: IPaymentMethodInfo;
  first_recurring: boolean;
  first_recurring_exception: boolean;
  duration: number;
  blocked_duration: number;
  tip_recurring: boolean;
  customer_notes: string | null;
  services: IService[];
  teams: any[];
  custom_fields: ICustomField[];
  summary: ISummary;
  discount_info: any;
  has_booking_images: boolean;
  actions: IActions;
}
