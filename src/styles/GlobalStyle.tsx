import React from 'react'
import { createGlobalStyle } from 'styled-components'
import 'reset-css'

export const GlobalStyle = createGlobalStyle`
 * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color:inherit;
    text-decoration: none;
    display: block;
    width:100%;
    height:100%;
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
