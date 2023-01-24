import { useState } from 'react';

function useFetch() {
  const [isLoading, setIsLoading] = useState(true);

  const makeFetch = async (url) => {
    setIsLoading(true);

    const response = await fetch(url);
    const json = await response.json();
    setIsLoading(false);
    return json;
  };

  return {
    makeFetch, isLoading,
  };
}

export default useFetch;
