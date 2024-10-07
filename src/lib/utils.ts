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

export function extractAddressFromApi(fullAddress) {
  // Split the address by commas
  const addressParts = fullAddress.split(',');

  // If there are four parts, ignore the first one (business name)
  if (addressParts.length === 4) {
    const [, address, city, zip] = addressParts.map(part => part.trim());
    return {
      address,
      city,
      zip,
    };
  }

  // If it's not four parts, handle it as usual (3-part address)
  if (addressParts.length === 3) {
    const [address, city, zip] = addressParts.map(part => part.trim());
    return {
      address,
      city,
      zip,
    };
  }

  // Return null or handle cases where the format is unexpected
  return null;
}