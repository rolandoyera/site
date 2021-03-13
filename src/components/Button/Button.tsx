/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';

const Button = ({ children }) => {
  return (
    <>
      <button sx={{
        display: `inline-block`,
        backgroundColor: `hsl(199, 89%, 68%, .55)`,
        borderColor: `cardBorder`,
        padding: `.75rem 0.75rem`,
        border: `1px solid`,
        borderRadius: `0.25rem`,
        fontSize: `1rem`,
        color: `text`,
        cursor:`pointer`,
        }}>{ children }</button>
    </>
  );
}

export default Button;


// const button`
// 	display: inline-block;
// 	font-weight: 400;
// 	line-height: 1.5;
// 	color: ${p => p.theme.colors.primary};
// 	text-align: center;
// 	text-decoration: none;
// 	vertical-align: middle;
// 	cursor: pointer !important;
// 	-webkit-user-select: none;
// 	-moz-user-select: none;
// 	user-select: none;
//   border: 1px solid transparent;
//   padding: 0.525em 1em;
//   font-size: 16px;
//   border-radius: 0.25rem;
//   background-color: hsl(199, 89%, 68%, .25);
//   border-color: hsl(199, 89%, 68%);
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//   border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   min-width:100px;

//   &:hover{
//     background-color: hsl(199, 89%, 68%, .55);
//     border-color: hsl(199, 89%, 71%);
//     color: ${p => p.theme.colors.primary};
//     cursor: pointer !important;
    
//   }
//   &:focus{
//     outline: 0;
//   box-shadow: 0 0 0 0.35rem hsl(199, 89%, 68%, .55);
//   border-color: hsl(199, 89%, 81%);
//   cursor: pointer !important;

//   }

// `

