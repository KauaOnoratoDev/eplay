import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branco: '#eee',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.preto};
    color: ${Cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
