import { useState } from 'react';
import { useEffect } from 'react';
import { getBooks } from '../services/lotr.js';

export function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchData();
  }, []);
  return { books };
}
