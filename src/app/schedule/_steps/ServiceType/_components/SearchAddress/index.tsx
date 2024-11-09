import useSchedule from "@/context/schedule/useSchedule";
import { extractAddressFromApi } from "@/lib/utils";
import { lookupPostcodeAutocomplete } from "@/services/apis/ideal-postcodes/requests/postcodes";
import { useEffect, useState } from "react";

function SearchAddress() {
  const { setAddress, bookingData } = useSchedule()

  const [result, setResult] = useState(null);
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    const res = await lookupPostcodeAutocomplete(postcode)
    setResult(res)
    setError('')
  };

  useEffect(() => {
    if (postcode) {
      fetchData();
    }
    console.log(result);
  }, [postcode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
  };

  const handleAddressSelect = (suggestion: string) => {
    const extractedAddress = extractAddressFromApi(suggestion);
    if (extractedAddress) {
      setAddress(extractedAddress);
      // console.log(extractedAddress)
    }
  };

  const hasResults = result?.result?.hits && result.result.hits.length > 0;

  return (
    <div>
      <div className="relative">
      <h2 className="text-2xl font-semibold mb-4">Home Address</h2>
        <input
          type="text"
          value={postcode}
          onChange={handleInputChange}
          placeholder="Your Address"
        />
        {/* <div className="absolute bg-black text-white max-h-[300px]">
          {hasResults ? (
            result.result.hits.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleAddressSelect(item.suggestion)}
                className="cursor-pointer"
              >
                {item.suggestion}
              </div>
            ))
          ) : (
            <div>Start typing to find address</div>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default SearchAddress
