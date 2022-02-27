import styled from "styled-components";

export const HomeSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  div {
    background-color: ${({ theme }) => theme.home.bg};
    width: ${({ theme }) => theme.home.boxWidth};
    height: 200px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  button {
    outline: none;
    padding: 0.5rem 1rem;
    color: white;
    background-color: black;
    border-radius: 10px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    
  }
`;
