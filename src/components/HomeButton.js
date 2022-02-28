import { Link } from "react-router-dom";
import { HeaderStyle, NavOppgave1 } from "../styles/Header";

const HomeButton = ()=>{
    return(
        <HeaderStyle>
        <NavOppgave1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/oppgave1">
              <li>Oppgave 1</li>
            </Link>
          </ul>
        </NavOppgave1>
      </HeaderStyle>
    )
}

export default HomeButton;