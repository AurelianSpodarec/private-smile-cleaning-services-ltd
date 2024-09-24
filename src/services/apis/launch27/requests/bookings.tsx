// ============================================================
// API Bookings
// ============================================================
import FetchSmileCleaning from "../fetch/FetchSmileCleaning"
import { IBooking } from "@/interfaces/IBooking"

// Types
// ===========================================

export type BookingListResponse = IBooking[];

// Booking
// ===========================================

export async function getBookingList(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('customer/bookings', 'GET');
}

export async function getBookingListCount(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('customer/bookings/count', 'GET');
}

export async function getCustomerBookingList(): Promise<BookingListResponse> {
  console.log("WOOF")
  return await FetchSmileCleaning('customer/bookings', 'GET');
}

export async function getBookingSettings(): Promise<BookingListResponse> {
  return await FetchSmileCleaning('settings', 'GET');
}
