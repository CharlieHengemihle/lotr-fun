import { useBooks } from '../../hooks/useBooks.js';

export default function Books() {
  const { books } = useBooks();

  return (
    <ul className="books">
      {books.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
        </li>
      ))}
    </ul>
  );
}
