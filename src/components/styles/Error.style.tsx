import styled from "styled-components";

export const StyledError = styled.div`
  color: #f16d6d;
  width: 300px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    border: none;
    color: #f16d6d;
    border-radius: 0.25rem;
    background-color: #5c5470;
    padding: 0.5rem 0.75rem;
    margin: 0 0.25rem;
    cursor: pointer;
    &:hover {
      background-color: #6f6781;
      color: #fff;
      opacity: 0.9;
      transform: scale(0.95);
    }
  }
`;
