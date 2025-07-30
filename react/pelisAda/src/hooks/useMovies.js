
import { useEffect, useState } from 'react';

const API_KEY = 'f1791c8a7ce5c179c4d07057587d5935';
const BASE_URL = 'https://api.themoviedb.org/3';

const useMovies= (endpoint) =>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
}
export default useMovies;