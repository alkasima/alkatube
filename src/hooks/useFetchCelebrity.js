import { useState, useEffect } from "react";

export const useFetchCelebrity = () => {
  
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        async function useFetchCelebrity() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        useFetchCelebrity();
      }, [url  ])


  return { data }
}
