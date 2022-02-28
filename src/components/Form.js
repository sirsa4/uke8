import { FormContainer } from "../styles/FormContainer";

const Form = ({ input, setInput, todo, setTodo }) => {
  const change = (e) => {
  /*   console.log(e.target.value); */
    setInput(e.target.value);
  };
  const submit =(e)=>{
    e.preventDefault();

    if(input !== ''){
      /* console.log('working'); */
      const newTodo = [...todo, {id: Math.floor(Math.random() * 1000), todo: input, status: 'Not done'}];
      setTodo(newTodo);
      setInput('');
      console.log(todo);
    }
  }
  return (
    <FormContainer>
      <h1>Oppgave 2</h1>
      <form onSubmit={submit}>
        <h2>Lage ny oppgave</h2>
        <div className="container">
          <input type="text" 
          onChange={change}
          value={input}
          />
          <div>
            <button type="submit">Add todo</button>
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;
