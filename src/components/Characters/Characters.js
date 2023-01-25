import { useCharacters } from '../../hooks/useCharacters.js';

export default function Characters() {
  const { characters } = useCharacters();

  return (
    <ul className="characters">
      {characters.map((character) => (
        <li key={character.id}>
          <p>{character.name}</p>
        </li>
      ))}
    </ul>
  );
}
