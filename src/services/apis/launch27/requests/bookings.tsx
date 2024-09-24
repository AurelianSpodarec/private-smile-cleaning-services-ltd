// ============================================================
// API Bookings
// ============================================================
import FetchSmileCleaning from "../fetch/FetchSmileCleaning"
import { IBooking } from "@/interfaces/IBooking"

// Types
// ===========================================

export interface BookingListResponse {
  [key: string]: IBooking; // Each key is a booking ID, and the value is a Booking object
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

export async function getBookingSettings(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('settings', 'GET');
}
