import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseCookies(cookiesString: string) {
  const cookiePairs = cookiesString.split('; ')
  const cookies = {}
  cookiePairs.forEach(cookiePair => {
    const [key, value] = cookiePair.split('=')
    // @ts-ignore
    cookies[key] = value
  })

  return cookies
}

/**
 * Extracts the address, city, and zip code from a full address string.
 * 
 * The function splits the input string by commas and trims whitespace. 
 * The first part is excluded because it is assumed to be a business name, 
 * which is not needed for the API. It supports both 3-part and 4-part address formats.
 *
 * @param {string} fullAddress - The full address string to parse.
 * @returns {Object|null} An object containing the address, city, and zip code,
 *                       or null if the input format is incorrect.
 */
export function extractAddressFromApi(fullAddress) {
  const addressParts = fullAddress.split(',');

  if (addressParts.length === 4) {
    const [, address, city, zip] = addressParts.map(part => part.trim());
    return {
      address,
      city,
      zip,
    };
  }

  if (addressParts.length === 3) {
    const [address, city, zip] = addressParts.map(part => part.trim());
    return {
      address,
      city,
      zip,
    };
  }
  return null;
}

export const excludeItemsFromArrayById = (array: [], extrasIdsToExclude: []): number[] => {
  return array.filter(item => {
    return !extrasIdsToExclude.some(excludedId => item.id === excludedId);
  });
};

export function formatBritishDate(date: Date): string {
  function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return 'th'; // Special case for 11th-13th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  const day = date.getDate();
  const month = date.toLocaleDateString('en-GB', { month: 'long' });
  const year = date.getFullYear();

  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}