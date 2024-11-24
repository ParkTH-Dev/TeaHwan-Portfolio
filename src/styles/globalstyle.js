import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
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
    font-family: 'LINESeedKR-Bd', sans-serif;
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
