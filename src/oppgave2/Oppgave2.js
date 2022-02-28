
import Form from "../components/Form";
import HomeButton from "../components/HomeButton";
import TodoCard from "../components/TodoCard";
import { HomeContainer } from "../styles/Container";

const Oppgave2 = () => {
  return (
    <HomeContainer>
        <HomeButton/>
      <main>
          <Form/>
          <TodoCard/>
      </main>
    </HomeContainer>
  );
};

export default Oppgave2;
