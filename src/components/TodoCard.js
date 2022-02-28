import { TodoSection } from "../styles/TodoSection";


const TodoCard = ({ todo, setTodo, setStatus }) => {

  const filterr = (id) => {
    const newTodo = todo.filter((todos) => todos.id !== id);
    setTodo(newTodo);
  };

  const updateStatus = (id)=>{
  
    const copy = [...todo]
   const complete = copy.find((todos)=>todos.id === id? todos.status = 'Done' : null);
  
   setTodo(copy);
    


    /* const update = todo.find((todos)=>{
      if(todos.id === id){
        return console.log(todos.status = 'Done');;
      } 
    }); */
  }
  /* if(todos.id === id){
    return console.log(todos);;
  } */
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
      {todo
        ? todo.map((todos) => {
            const { id, todo, status } = todos;
            return (
              <article key={id}>
                <ul>Id: {id}</ul>
                <ul>Todo: {todo}</ul>
                <ul>Status: {status}</ul>
                <div>
                  <button type="submit"
                  onClick={()=>filterr(id)}
                  >Remove</button>


                  <button type="button"
                  onClick={()=>updateStatus(id)}
                  >Complete</button>
                </div>
              </article>
            );
          })
        : null}
    </TodoSection>
  );
};

export default TodoCard;
