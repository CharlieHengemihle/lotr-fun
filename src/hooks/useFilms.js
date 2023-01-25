import { useState } from 'react';
import { useEffect } from 'react';
import { getFilms } from '../services/lotr.js';

export function useFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      setFilms(data);
    };
    fetchData();
  }, []);
  return { films };
}
