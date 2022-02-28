import styled from "styled-components";

export const TodoSection = styled.section`
  display: grid;
  gap: 0.5rem;

  article {
    box-shadow: 1px 1px 4px 1px black;
    background-color: ${({ theme }) => theme.card.contentLight};
    border-radius: 10px;
    display: grid;
    place-items: center;
    padding: 0.5rem;

    button {
      cursor: pointer;
    }

    div {
      display: flex;
      margin-left: 2rem;
      gap: 2rem;

      button:nth-child(1) {
        background-color: white;
        color: red;
        border: 2px solid red;
        padding: 0 0.5rem;
      }
      button:nth-child(2) {
        background-color: white;
        color: green;
        border: 2px solid green;
        padding: 0 0.5rem;
      }
      button {
        transition-property: transform;
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    place-items: initial;
    grid-template-columns: repeat(3, 1fr);

    article {
      place-items: initial;
    }
  }
`;
