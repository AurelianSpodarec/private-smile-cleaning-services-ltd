'use client'

import { DropdownMenuDefault, DropdownMenuDefaultContent, DropdownMenuDefaultItem, DropdownMenuDefaultTrigger } from "@/components/molecules/DropdownMenu";
import useSchedule from "@/context/schedule/useSchedule";
import { extractAddressFromApi } from "@/lib/utils";
import { lookupPostcodeAutocomplete } from "@/services/apis/ideal-postcodes/requests/postcodes";
import { useEffect, useState } from "react";

const serviceType = [
  {
    id: 5,
    slug: "residential-property",
    name: "Residential Property",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 512 512"
    >
      <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"></path>
      <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"></path>
    </svg>
  },
  {
    id: 2,
    slug: "end-of-tenancy",
    name: "End of Tenancy",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 640 512"
    >
      <path d="M256 48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3v-32c0-26.5-21.5-48-48-48H256V48zm315.3 299.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16v-32zm352 80v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256h320zm-208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96z"></path>
    </svg>
  },
  {
    id: 3,
    slug: "ironing",
    name: "Ironing",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-8 h-8"
      viewBox="0 0 24 24"
    >
      <path d="M12 15h.01M9 6h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A1 1 0 0119.82 18H3a7 7 0 017-7h9.8M9 15h.01M15 15h.01"></path>
    </svg>
  }
]

function CardAddress({ item }) {
  return (
    <div>
      <div>{item.suggestion}</div>
    </div>
  )
}

function GetAddress({ setAddress }) {
  const [result, setResult] = useState(null);
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    const res = await lookupPostcodeAutocomplete(postcode); // Mocked API call
    setResult(res);
    setError('');
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
      setAddress(extractedAddress); // Set address in the parent or state
    }
  };

  const hasResults = result?.result?.hits && result.result.hits.length > 0;

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={postcode}
          onChange={handleInputChange}
          placeholder="Your Address"
        />
        <div className="absolute bg-black text-white max-h-[300px]">
          {hasResults ? (
            result.result.hits.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleAddressSelect(item.suggestion)} // Set address on click
                className="cursor-pointer"
              >
                {item.suggestion}
              </div>
            ))
          ) : (
            <div>Start typing to find address</div>
          )}
        </div>
      </div>
    </div>
  );
}
function StepServiceType() {
  const { fetchedStepsData, bookingData, setServiceType } = useSchedule()

  return (
    <div className="flex flex-col">

      <GetAddress />

      <div className="grid grid-cols-3 gap-4">
        {fetchedStepsData && fetchedStepsData.length !== 0 && fetchedStepsData.data.map((item) => {
          const isActive = bookingData.services[0].id === item.id
          return (
            <button type="button" onClick={() => setServiceType(item.id)} key={item.id} className={`bg-white ${isActive ? "bg-gray-700" : "bg-white hover:bg-gray-200"} border border-gray-100 p-4 flex items-center justify-between`}>
              <div className="flex items-center align-center space-x-4">
                <span>{item.name}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  );
}

export default StepServiceType
