import React, { useState } from "react";
import Chevron from "./Chevron";
import styled from "styled-components"

export default function Accordion(props) {
  const [state, setState] = useState("");
  const toggleAccordion = () => {
    setState(state === "" ? "active" : "");
  }

  return (
    <AccordionItem>
      <AccordionButtonStyle onClick={toggleAccordion} className={`other ${state}`}>
        <Header className={`${state}`}>
          {props.label}
        </Header>
        <Chevron className={`${state}`} width={20} />
      </AccordionButtonStyle>
      <AccordionBodyStyle className={`${state}`}>
        <div style={{ padding: '1.25rem' }}>{props.children}</div>
      </AccordionBodyStyle>
    </AccordionItem>
  );
}

const AccordionItem = styled.div`
	margin-bottom: -1px;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
`;

const AccordionButtonStyle = styled.button`
	position: relative;
	display: flex;
	align-items: center !important;
  margin: 0 !important;
	width: 100%;
	padding: 1rem 1.25rem;
	font-size: 1rem;
	color: #212529;
  background-color: #fff;
  cursor: pointer;
	text-align: left;
	border: 1px solid transparent;
	border-radius: 0;
	overflow-anchor: none;
  outline: 0 !important;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
		border-radius 0.15s ease;
  &:focus {
    border-color: hsl(216, 90%, 72%);
    -webkit-box-shadow: 0 0 0 0.25rem hsla(216, 90%, 52%, .25);
          box-shadow: 0 0 0 0.25rem  hsla(216, 90%, 52%, .25);
    z-index: 3;
  }
  &.active {
    background-color: hsla(216, 90%, 52%, .2);
  }
`;

const Header = styled.h2`
	font-size: 1rem !important;
	margin: 0 !important;
	font-weight: 500;
	line-height: 1.2;
  &.active {
    color: hsl(216, 90%, 52%);
  }
`;

const AccordionBodyStyle = styled.div`
  background-color: white;
  overflow: hidden;
  width: 100%;
  max-height: 0;
  transition: max-height .25s ease-in-out;
  &.active {
    max-height: 300px;
  }
`;



