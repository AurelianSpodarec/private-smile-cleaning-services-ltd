import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseCookies(cookiesString:string) {
  const cookiePairs = cookiesString.split('; ')
  const cookies = {}
  cookiePairs.forEach(cookiePair => {
    const [key, value] = cookiePair.split('=')
    // @ts-ignore
    cookies[key] = value
  })

  return cookies
}

export function extractAddressFromApi(suggestion: string) {
  const addressPattern = /^(\d+\s[\w\s]+(?:\s\w)?)\,\s([\w\s]+),\s([A-Z]+\d+\s?[A-Z]+\d*)$/;
  const matchedAddress = suggestion.match(addressPattern);

  if (matchedAddress) {
    return {
      address: matchedAddress[1],
      city: matchedAddress[2],
      zip: matchedAddress[3],
    };
  } else {
    console.error("Address format does not match the expected pattern.");
    return null
  }
}
