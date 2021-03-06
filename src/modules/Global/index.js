import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #223D8F;
    --secondary-color: #F2D525;
    --third-color: #0F8F79;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: #fff;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    &.showMenu{
      overflow: hidden;
    }
  }
  button {
    font-family: 'Roboto Mono';
    font-size: 16px;
    &:focus{
      outline: none;
    }
  }
  a{
    display:inline-block;
    text-decoration: none;
  }
  h1{
    font-size: 2rem;
    font-weight: bold;
    margin: 50px 0px;
    font-family: 'JetBrains Mono';
    text-align: center;
  }
  h2{
    font-family: 'JetBrains Mono';
    font-size: 1.5rem;
    font-weight: bold;
    margin: 30px 0px 20px 0px;
  }
  h3{
    font-family: 'JetBrains Mono';
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 20px;
  }
  p{
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.3;
    a{
      display:inline-block;
      text-decoration: none;
      transition: all .125s ease;
      background-color: var(--third-color);
      color: white;
      &:hover{
        text-decoration: underline;
        background-color: var(--secondary-color);
        color: var(--third-color);
      }
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .gatsby-plugin-transition-link-portal{
    width: 100%;
  }
`
export default GlobalStyle
