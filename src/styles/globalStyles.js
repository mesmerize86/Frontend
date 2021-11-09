import {createGlobalStyle} from 'styled-components/macro';
import AppTheme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  body {
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
    font-weight: normal;
    color: ${AppTheme.colors.bodyColor};
  }
  a {
    color: ${AppTheme.colors.brand};
    text-decoration: none;
    &:hover {
      color: ${AppTheme.colors.brandLight};
    }
  }
  
  input {
    &:focus {
      outline: none;
    }
  }
`;


export default GlobalStyle;