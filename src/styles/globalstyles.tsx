import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1{
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  button{
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
};
  
  img{
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
