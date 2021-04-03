import { createGlobalStyle } from "styled-components"

const ResetCSS = createGlobalStyle`
::selection {
  background: #D10068;
  color: white; 
}
::-moz-selection {
  background: #D10068;
  color: white; 
}
  html {
    font-size: 1rem;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
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
    font-family: "Merriweather", serif;
    font-weight: 900;
  }

  body {
    font-family: 'Fira Sans',sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    line-height: 1.65;
    margin: 0 0 2em;
    font-weight: 300 !important;
    font-size:1.1rem;
  }
  
  input, 
  textarea, 
  select, 
  button {
    font-family: 'Fira Sans', sans-serif;
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
    font-family: 'Fira Sans',sans-serif;
    font-weight: 500;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    color: #D10068;
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
        padding-top: 10px;
        padding-bottom: 10px;

      }
    }
    
  }

`
export default ResetCSS
