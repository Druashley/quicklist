import styled from "styled-components";

export const StyledCreateList = styled.div`
  display: flex;
  justify-content: center;
  background-color: #352f44;
  color: #dbd8e3;
  padding: 1.25rem 0;

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #dbd8e3;
    border: none;
    cursor: pointer;
    font-weight: 700;
    padding: 0.5rem 0.75rem;
    color: #2a2438;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  }
`;
