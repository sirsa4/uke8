import styled from "styled-components";

export const FormContainer = styled.section`
  display: grid;
  place-items: center;
  box-shadow: 1px 1px 1px 1px hsla(100, 40%, 10%, 1),
    1px 1px 4px 1px hsla(100, 40%, 60%, 1);
  background-color: ${({ theme }) => theme.card.contentStrong};

  button {
    cursor: pointer;
  }

  form {
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    button {
      background-color: white;
      color: green;
      border: 2px solid green;
      margin-bottom: 0.5rem;
    }
  }
`;
