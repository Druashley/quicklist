import styled from "styled-components";

export const StyledListsMenu = styled.div`
  color: #dbd8e3;

  #box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
    margin: 0.3rem 0.3rem;
    min-width: 250px;
    max-width: 400px;
    padding: 1.5rem 0.75rem;
    word-break: break-all;
  }

  .list-container {
    margin-top: 2px;
    --borderWidth: 3px;
    background: #352f44;
    position: relative;
    margin: 0;
    border-radius: var(--borderWidth);

    &:hover {
      color: #fff;
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .list-container:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.25em;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    #box {
      min-width: 350px;
      max-width: 350px;
    }
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
