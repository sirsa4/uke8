import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Nav from "../components/Nav";

import Design from "../oppgave1/Design";

const Oppgave1 = () => {
  return (
  <div>
       <Nav/>
       <div>
           Oppgave 1 front page
       </div>
  </div>
  );
};

export default Oppgave1;
