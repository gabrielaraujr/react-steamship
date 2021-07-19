import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --ship-blue: #4586bc;
    --ship-blue-dark: #110b79;
    --ship-black: #1a1a1a;
    --bg-info: #0a141d;
    --bg-prices: #040809;
    --text-prices-dark: #628291;
    --text-prices-light: #90cef5;
    --bg-percentage: #4b6b22;
    --text-percentage: #9ecc24;
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #2f5564 0%,
      #184353 50%,
      #1b2838 100%
    );
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins, sans-serif;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #eeeeee;
    border-radius: 20px;
    :hover { background: #cecece; };
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(145, 145, 145);
    border-radius: 20px;
    :hover { background-color: rgb(119, 119, 119); };
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: rgb(189, 189, 189);
  }
`;