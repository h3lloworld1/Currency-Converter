import { useEffect, useState } from "react";

const useFetchConverter = (url) => {
  const [converterData, setConverterData] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "06e6217b89mshae2dc890c2d5f53p19b635jsnda22e437b25a",
      "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setConverterData(response))
      .catch((err) => setError(err));
  }, [url]);

  return { converterData, error };
};

export default useFetchConverter;
