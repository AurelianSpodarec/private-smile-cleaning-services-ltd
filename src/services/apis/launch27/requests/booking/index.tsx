// ============================================================
// API Bookings
// ============================================================
import { IBooking } from "@/interfaces/IBooking"
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning";

// Types
// ===========================================

export interface BookingListResponse {
  [key: string]: IBooking;
}

// Booking
// ===========================================

export async function getBookingList(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('customer/bookings', 'GET');
}

export async function getBookingListCount(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('customer/bookings/count', 'GET');
}

export async function getCustomerBookingList(): Promise<IBooking[]> {
  const res = await FetchSmileCleaning('customer/bookings', 'GET');
  return Object.values(res)
}

export async function createBooking({ data }): Promise<BookingListResponse> {
  return await FetchSmileCleaning('customer/bookings', 'POST', data);
}

export async function getBookingById({ id }): Promise<BookingListResponse> {
  return await FetchSmileCleaning(`customer/bookings/${id}`, 'POST');
}

export async function cancelBooking({ id, data }): Promise<BookingListResponse> {
  return await FetchSmileCleaning(`customer/bookings/${id}/cancel`, 'POST', data);
}
