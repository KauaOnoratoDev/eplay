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
  }

  body {
    background-color: ${Cores.preto};
    color: ${Cores.branco};
  }
`
