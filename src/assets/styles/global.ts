import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --ship-blue: #4586bc;
    --ship-blue-dark: #110b79;
    --ship-black: #1a1a1a;
    --bg-info: #0a141d;
    --bg-prices: #040809;
    --bg-percentage: #4b6b22;
    --bg-list-item: #1b2838;
    --text-prices-dark: #628291;
    --text-list-prices-dark: #888888;
    --text-prices-light: #90cef5;
    --text-percentage: #9ecc24;
    --text-date: #4c6c8c;
    --newsletter-button: #36db80;
    --newsletter-button-dark: #029947;
    --item-text: #d2efa9;
    --item-button: #8ed629;
    --item-button-dark: #6fa720;
    --hiring-main: #f80186;
    --hiring-button-hover: #cbdae1;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(
      180deg,
      #2f5564 0%,
      #184353 50%,
      #1b2838 100%
    );
    color: var(--ship-black);
  }

  html, body, #root {
    width: 100%;
    /* height: 100%; */
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
