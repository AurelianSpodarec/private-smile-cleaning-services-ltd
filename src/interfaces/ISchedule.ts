export interface IBookingRequestLoggedIn extends IBookingRequestBase {
  original_booking_id?: number | null;
  // No 'user' and 'stripe_token' required as it's a logged-in user
}

export interface IBookingRequestNonLoggedIn extends IBookingRequestBase {
  user: string; // required for non-logged-in users
  stripe_token?: string; // required if payment_method="stripe" for non-logged-in users
}

export interface IBookingRequestBase {
  location_id?: number | null;
  original_booking_id?: number | null;
  address: string;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  sms_notifications?: boolean | null;
  frequency_id: number;
  service_date: string; // Format: "YYYY-MM-DDTHH:MM:SS"
  arrival_window: number; // in minutes
  services: IService[];
  discount_code?: string | null;
  tip?: number | null;
  tip_recurring?: boolean | null;
  payment_method: 'stripe' | 'paypal' | 'cash' | 'check';
  customer_notes?: string | null;
  custom_fields?: ICustomField[] | null;
}

export interface IService {
  id: number;
  hourly?: IHourly | null;
  extras?: IExtra[] | null;
  pricing_parameters?: IPricingParameter[] | null;
}

export interface IHourly {
  quantity: number;
  minutes: number;
}

export interface IExtra {
  id: number;
  quantity: number;
  recurring?: boolean | null;
}

export interface IPricingParameter {
  id: number;
  quantity: number;
}

export interface ICustomField {
  id: number;
  value?: string;
  values?: ICustomFieldValue[];
}

export interface ICustomFieldValue {
  id: number;
  other?: string | null;
}
