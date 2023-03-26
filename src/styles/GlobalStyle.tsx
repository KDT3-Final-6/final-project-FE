import React from 'react'
import { createGlobalStyle } from 'styled-components'
import 'reset-css'
import { FONTWEGHT } from './root'

export const GlobalStyle = createGlobalStyle`
@font-face { font-family: 'Pretendard-Regular'; src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff'); font-weight: ${FONTWEGHT.fw400}; font-style: normal; }

 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
    font-size: 14px;
  }

  #root {
    font-family: 'Pretendard-Regular';
    font-size: 14px;
  }

  a {
    color:inherit;
    text-decoration: none;
    display: block;
  }

  svg {
    margin:0 auto;
  }

  input {
    width: 100%;
    height: 100%;
    border:none;
    background:transparent;
    outline:none;
  }

  button {
    cursor:pointer;
    border:none;
    background-color: transparent;
  }
`
