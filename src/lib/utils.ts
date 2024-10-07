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
