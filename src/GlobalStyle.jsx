import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  :root {
    --corPrimaria: #4761b4;
    --corSecundaria: #e5401b;
    --corTerciario: #1473e6;
    --corBranco: #fff;
    --corPreto: #000;

    --corRoxoEscuro: #414278;
    --corRoxo: #8140a6;
    --corAmarelo: #eac05a;
    --corCinza: #c8ddda;
    --corCinzaEscuro: #707070;

    --fontePadrao: "Space Mono", monospace;
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    font-family: var(--fontePadrao);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;
