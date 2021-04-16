import { createGlobalStyle } from "styled-components"
import {Font} from '../theme/font'
import {Color} from '../theme/colors'

const ResetCSS = createGlobalStyle`
::selection {
  background: ${Color.primary.color};
  color: white; 
}
::-moz-selection {
  background: ${Color.primary.color};
  color: white; 
}
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin-top: 0;
    font-family: ${Font.family.sans};
  }

  body {
    font-family: ${Font.family.sans};
    margin: 0;
    padding: 0;
    font-size: ${Font.size.md};
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;

  }

  p {
    line-height: ${Font.height};
    margin: 0 0 2em;
    font-weight: ${Font.weight.md} !important;
    font-size: ${Font.size.md};
  }
  
  input, 
  textarea, 
  select, 
  button {
    font-family: ${Font.family.sans};
  }
  ul {
    margin-left: 1.5rem;
  }
  article  ul {
    margin-bottom: 2.5rem;
  }

  article ul li{
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    box-shadow: none;
  }
  a:hover {
    text-decoration: none;
  }
  blockquote{
    font-family: ${Font.family.sans};
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    color: ${Color.primary.color};
    font-family: 'Operator Mono', monospace;
    font-size: 1rem;
  }
p > code {
  background-color: transparent !important;
  padding: 0 .2rem !important;
  letter-spacing: -.05rem 
}
li > code {
  background-color: transparent !important;
  padding: 0 .2rem !important;
  letter-spacing: -.05rem 
}

  pre[class*="language-"] {
    padding: 1.2em;
    margin: 2em 0;
    overflow: auto;
    font-family: 'Operator Mono', monospace;
    
  }
em {
  font-family: 'Operator Mono', monospace;
}

  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2em;
    line-height: 1.6;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  table th{
    font-weight: 500;
  }

  table td,
  table th {
    border: 1px solid #dfe2e5;
    padding: .4em 1em;
  }

  .nav-sticky{
    .header {
      box-shadow: 0 0 15px rgba(0,0,0,.08);
      .navbar{
        padding-top: 2px;
        padding-bottom: 2px;

      }
    }
    
  }

`
export default ResetCSS
