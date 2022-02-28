
import Form from "../components/Form";
import HomeButton from "../components/HomeButton";
import TodoCard from "../components/TodoCard";
import { HomeContainer } from "../styles/Container";
import {useState} from 'react';

const Oppgave2 = () => {
  const [input, setInput]=useState('');
  const [todo, setTodo]=useState([]);
  return (
    <HomeContainer>
        <HomeButton/>
      <main>
          <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          />
          <TodoCard
          todo={todo}
          setTodo={setTodo}
          />
      </main>
    </HomeContainer>
  );
};

export default Oppgave2;
