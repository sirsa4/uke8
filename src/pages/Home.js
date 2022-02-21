import { Link } from "react-router-dom";
//import styles
import { HomeContainer } from "../styles/Container";
import { HomeSection } from "../styles/HomeSection";

const Home = () => {
  return (
    <HomeContainer>
      <h1>Oppgaver i uke 8</h1>
      <HomeSection>
          <div><Link to="/oppgave1"><button type="button">Oppgave1</button></Link></div>
          <div><Link to="/oppgave2"><button type="button">Oppgave2</button></Link></div>
          <div><Link to="/oppgave3"><button type="button">Oppgave3</button></Link></div>
          <div><Link to="/oppgave4"><button type="button">Oppgave4</button></Link></div>
      </HomeSection>
    </HomeContainer>
  );
};

export default Home;
