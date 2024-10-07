// ============================================================
// # API Bookings/Helpers
// ============================================================
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning";
import { BookingListResponse } from ".";
import { IService } from "@/interfaces/IBooking";

export async function getServices(): Promise<IService> {
  const res = await FetchSmileCleaning(`booking/services`, 'GET');
  return Object.values(res) as IService[];
}

export async function getPriceEstimation({ data }): Promise<BookingListResponse> {
  const res = await FetchSmileCleaning(`booking/estimate_price`, 'POST', data);
  return Object.values(res)
}
