'use client'

import { lookupPostcode, lookupPostcodeAutocomplete } from "@/services/apis/ideal-postcodes/requests/postcodes";
import { useEffect, useState } from "react";

function CardAddress({ item }) {
  return (
    <div>
      <div>{item.suggestion}</div>
    </div>
  )
}

function StepLocation() {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    const res = await lookupPostcodeAutocomplete(postcode);
    setResult(res);
    setError(''); // Clear previous errors if successful
    // console.log(res)
  }

  useEffect(() => {
    fetchData();
  }, [postcode]); // Runs when postcode changes

  const handleInputChange = (e) => {
    setPostcode(e.target.value);
  };

  return (
    <div>
      <h3>StepLocation</h3>
      <input
        type="text"
        value={postcode}
        onChange={handleInputChange}
        placeholder="Enter postcode"
      />
      <div>
        {result && (
          <div>
            <h4>Results:</h4>
            <div>
              {result?.result?.hits && result.result.hits.length > 0 && result.result.hits.map((item) => (
                <CardAddress key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default StepLocation;