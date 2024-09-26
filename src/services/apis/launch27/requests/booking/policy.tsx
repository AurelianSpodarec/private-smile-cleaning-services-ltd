// ============================================================
// # API Bookings/Policy
// ============================================================
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning"
import { IBooking } from "@/interfaces/IBooking"

export async function getBookingPolicyNew(): Promise<IBooking[]> {
  return await FetchSmileCleaning('policy/booking', 'GET');
}

export async function getBookingPolicyReschedule(): Promise<IBooking[]> {
  return await FetchSmileCleaning('policy/reschedule', 'GET');
}

export async function getBookingPolicyCancellation(): Promise<IBooking[]> {
  return await FetchSmileCleaning('policy/cancellation', 'GET');
}

export async function getBookingPolicyLocation(): Promise<IBooking[]> {
  return await FetchSmileCleaning('policy/location', 'GET');
}
