// ============================================================
// # API Bookings/Helpers
// ============================================================
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning";
import { BookingListResponse } from ".";
import { IService } from "@/interfaces/IBooking";

export async function getServices(): Promise<{ [key: string]: IService }> {
  const res = await FetchSmileCleaning(`booking/services`, 'GET');

  // Transformer
  const serviceHashTable: { [key: string]: IService } = {};
  Object.values(res).forEach((service: IService) => {
    serviceHashTable[service.id] = service; 
  });

  return serviceHashTable;
}

export async function getPriceEstimation({ data }): Promise<BookingListResponse> {
  const res = await FetchSmileCleaning(`booking/estimate_price`, 'POST', data);
  return Object.values(res)
}
