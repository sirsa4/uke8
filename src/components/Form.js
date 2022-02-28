import { FormContainer } from "../styles/FormContainer";

const Form = () => {
  return (
    <FormContainer>
        <h1>Oppgave 2</h1>
      <form>
              <h2>Lage ny oppgave</h2>
          <div className="container">
              <input type="text" />
              <div>
              <button type="submit">Add todo</button>
              </div>
          </div>
      </form>
    </FormContainer>
  );
};

export default Form;
