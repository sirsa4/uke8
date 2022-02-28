import { TodoSection } from "../styles/TodoSection";

const TodoCard = ({todo, setTodo}) => {
  return (
    <TodoSection>
     {/*  <article>
        <ul>Id: 935</ul>
        <ul>Todo: My Todo</ul>
        <ul>Status: Not done</ul>
        <div>
          <button type="submit">Remove</button>
          <button type="button">Complete</button>
        </div>
      </article> */}
      {todo? todo.map((todos)=>{
        const {id, todo, status} = todos;
        return(
          <article key={id}>
          <ul>Id: {id}</ul>
          <ul>Todo: {todo}</ul>
          <ul>Status: {status}</ul>
          <div>
            <button type="submit">Remove</button>
            <button type="button">Complete</button>
          </div>
        </article>
        )
      }) : null}
    </TodoSection>
  );
};

export default TodoCard;
