import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fontFamily.sourceSansPro};
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    overflow-wrap: break-word;
  }

  h1 {
    font-size: 3rem;
    line-height: 1;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  h6 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  #root {
    isolation: isolate;
  }
`;
