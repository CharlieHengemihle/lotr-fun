import { useFilms } from '../../hooks/useFilms.js';

export default function Films() {
  const { films } = useFilms();

  return (
    <ul className="films">
      {films.map((film) => (
        <li key={film.id}>
          <p>{film.title}</p>
        </li>
      ))}
    </ul>
  );
}
