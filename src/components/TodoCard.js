import { TodoSection } from "../styles/TodoSection";

const TodoCard = () => {
  return (
    <TodoSection>
      <article>
        <ul>Id: 935</ul>
        <ul>Todo: My Todo</ul>
        <ul>Status: Not done</ul>
        <div>
          <button type="submit">Remove</button>
          <button type="button">Complete</button>
        </div>
      </article>
    </TodoSection>
  );
};

export default TodoCard;
