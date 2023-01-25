import { NavLink } from 'react-router-dom';
import './NavHeader.css';
export default function NavHeader() {
  return (
    <header>
      <NavLink exact={true} to="/" className="home">
        Home
      </NavLink>
      <NavLink exact={true} to="/books" className="books">
        The Literary Collection!
      </NavLink>
      <NavLink exact={true} to="/films" className="films">
        The Cinematic Productions!
      </NavLink>
      <NavLink exact={true} to="/characters" className="characters">
        The Whole Gang!
      </NavLink>
    </header>
  );
}
