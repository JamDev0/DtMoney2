import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;

    box-shadow: 0px 0px 0px 2px ${(params) => params.theme['gray-500']};
  }

  body {
    background-color: ${(params) => params.theme['gray-800']};
    color: ${(params) => params.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  textarea, button, body, input {
    font: 400 1rem 'Roboto', sans-serif;
    line-height: 160%;
  }
`
