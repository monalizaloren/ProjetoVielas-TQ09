import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  :root {
    --colorPrimary: #4761b4;
    --colorSecundary: #e5401b;
    --colorTertiary: #1473e6;
    --colorWhite: #fff;
    --colorBlack: #000;

    --colorDarkPurple: #414278;
    --colorPurple: #8140a6;
    --colorYellow: #eac05a;
    --colorGray:#CCCCCC;
    --colorLightCyan: #c8ddda;
    --colorDarkGray: #707070;

    --defaultFont: "Space Mono", monospace;
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    font-family: var(--defaultFont);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;
