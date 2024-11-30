import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'LINESeedKR';
    src: url('/fonts/LINESeedKR-Th.woff2') format('woff2'),
         url('/fonts/LINESeedKR-Th.woff') format('woff'),
         url('/fonts/LINESeedKR-Th.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LINESeedKR';
    src: url('/fonts/LINESeedKR-Rg.woff2') format('woff2'),
         url('/fonts/LINESeedKR-Rg.woff') format('woff'),
         url('/fonts/LINESeedKR-Rg.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LINESeedKR';
    src: url('/fonts/LINESeedKR-Bd.woff2') format('woff2'),
         url('/fonts/LINESeedKR-Bd.woff') format('woff'),
         url('/fonts/LINESeedKR-Bd.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    @media (max-width: 1200px) {
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'LINESeedKR', sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  li, ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  img {
    max-width: 100%;
    height: auto;
  }


`;
