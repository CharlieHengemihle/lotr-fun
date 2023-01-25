import { useState } from 'react';
import { useEffect } from 'react';
import { getCharacters } from '../services/lotr.js';

export function useCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);
  return { characters };
}
