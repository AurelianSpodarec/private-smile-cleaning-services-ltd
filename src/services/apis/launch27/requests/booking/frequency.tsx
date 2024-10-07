// ============================================================
// # API Bookings/Frequencies
// ============================================================
import FetchSmileCleaning from "../../fetch/FetchSmileCleaning"

type IntervalType =
  | 'o'          // One Time
  | '1w'         // Weekly
  | '2w'         // Every 2 weeks
  | '3w'         // Every 3 weeks
  | '4w'         // Monthly
  | string;      // Custom

interface IBookingFrequency {
  id: number;
  interval: IntervalType;
  name: string;
  percent: number;
  amount: number;
  exclude_first: boolean;
  default: boolean;
}

type IBookingListResponse = IBookingFrequency[];

// Define the filter options
type IFilterOption = 'oneTime' | 'recurring' | 'excludeFirst' | 'default';

interface IGetBookingFrequenciesParams {
  booking_uuid?: string;
  location_id?: string;
  filterBy?: IFilterOption;
}

export async function getBookingFrequencies() {
  const res = await FetchSmileCleaning('booking/frequencies', 'GET');
  return Object.values(res)
}

export async function getBookingFrequenciesByType({ booking_uuid, location_id, filterBy }: IGetBookingFrequenciesParams = {}): Promise<IBookingListResponse> {

  const params = new URLSearchParams();
  if (booking_uuid) params.append('booking_uuid', booking_uuid);
  if (location_id) params.append('location_id', location_id);

  const frequencies: IBookingListResponse = await FetchSmileCleaning(`booking/frequencies?${params.toString()}`, 'GET');

  if (filterBy) {
    const filters: Record<IFilterOption, (freq: IBookingFrequency) => boolean> = {
      oneTime: (freq) => freq.interval === 'o',
      recurring: (freq) => freq.interval !== 'o',
      excludeFirst: (freq) => freq.exclude_first === true,
      default: (freq) => freq.default === true,
    };
    const filterFunction = filters[filterBy];
    return filterFunction ? frequencies.filter(filterFunction) : frequencies;
  }

  return frequencies;
}
