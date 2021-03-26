import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
  padding-top: 27px;
	padding-bottom: 27px;
	padding-left: 27px;
	padding-right: 27px;

`


const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}



export default Button;
