import styled from "styled-components";

export const StyledActiveList = styled.div`
  /* background-color: green; */

  h1 {
    font-size: 3rem;
    text-align: center;
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    background-color: #383838;
    border-radius: 0.5rem;
    min-width: 100%;
    min-height: 450px;
  }

  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-bottom: 1px dotted #fff;
    min-width: 125px;
  }
  .name {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
  span {
    cursor: pointer;
    &:hover {
      font-size: 2.75rem;
      opacity: 0.9;
    }
  }
  button {
    border: none;
    color: #fff;
    border-radius: 0.25rem;
    background-color: #5c5470;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    &:hover {
      background-color: #6f6781;
      opacity: 0.9;
      transform: scale(0.95);
    }
  }
  .confirm {
    background-color: #83fc5e;
    color: black;
    margin-right: 0.25rem;
  }

  .deny {
    color: black;
    background-color: #f16d6d;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      text-align: center;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
    }
  }
`;
