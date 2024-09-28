// ============================================================
// # API Postcodes
// ============================================================
import FetchIdealPostcodes from "../fetch/FetchIdealPostcodes";

export async function lookupPostcode(data: string) {
  return await FetchIdealPostcodes(`postcodes/${data}`, 'GET');
}

export async function lookupPostcodeAutocomplete(data: string) {
  return await FetchIdealPostcodes(`autocomplete/addresses?query=${data}`, 'GET');
}
