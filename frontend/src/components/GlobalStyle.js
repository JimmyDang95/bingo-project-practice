import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
ul, li {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
  html, body {
    margin: 0;
    font-family: sans-serif;
  }
   * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }

  
   `