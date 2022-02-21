import { Link } from "react-router-dom";
import { HeaderStyle, NavOppgave1 } from "../styles/Header";

const Nav = () => {
  return (
    <HeaderStyle>
      <NavOppgave1>
        <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
          <Link to="/oppgave1">
            <li>Oppgave 1 Front Page</li>
          </Link>
          <Link to="/design">
            <li>Design</li>
          </Link>
          <Link to="/programming">
            <li>Programming</li>
          </Link>
          <Link to="/support">
            <li>Support</li>
          </Link>
        </ul>
      </NavOppgave1>
    </HeaderStyle>
  );
};

export default Nav;
