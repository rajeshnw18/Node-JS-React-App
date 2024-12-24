import React, { useEffect, useState } from 'react';
import { fetchData } from './apiService'; // Import the function

function DynamicApiCall({ apiName }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (apiName) {
      fetchData(apiName)
        .then((response) => setData(response))
        .catch((err) => setError(err));
    }
  }, [apiName]);

  return (
    <div>
      <h1>Data from API: {apiName}</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DynamicApiCall;
