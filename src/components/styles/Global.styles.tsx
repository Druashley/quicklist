import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100% auto;
}

body {
    margin: 0;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    background-color: #352F44;
    color: #DBD8E3;
}

* {
    box-sizing: border-box;
    font-family: 'Laila', sans-serif;
}

`;
