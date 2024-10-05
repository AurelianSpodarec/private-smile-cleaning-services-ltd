// ============================================================
// # API Bookings/Helpers
// ============================================================
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning";
import { BookingListResponse } from ".";

export async function getServices(): Promise<BookingListResponse> {
  const res = await FetchSmileCleaning(`booking/services`, 'GET');
  return Object.values(res)
}

export async function getPriceEstimation({ data }): Promise<BookingListResponse> {
  const res = await FetchSmileCleaning(`booking/estimate_price`, 'POST', data);
  return Object.values(res)
}
