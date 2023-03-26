import React from 'react'
import { createGlobalStyle } from 'styled-components'
import 'reset-css'
import { FONTWEGHT } from './root'

export const GlobalStyle = createGlobalStyle`
/* @font-face { font-family: 'Pretendard Variable'; src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css") } */

 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Pretendard Variable", "Pretendard", -apple-system, "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 14px;
  }

  #root {
    font-family: "Pretendard Variable", "Pretendard", -apple-system, "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
