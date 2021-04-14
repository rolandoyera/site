import React from "react";
import styled from "styled-components"

function Chevron(props) {
  return (
    <SVG
      height={props.height}
      width={props.width}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill={props.fill}
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </SVG>
  );
}
export default Chevron;

const SVG = styled.svg`
  margin-left: auto;
  transform: rotate(-90deg);
  transition: transform 0.1s ease-in-out, -webkit-transform 0.15s ease-in-out;
  &.active {
    fill: hsl(216, 90%, 52%);
    transform: rotate(0deg);
  }
`;


