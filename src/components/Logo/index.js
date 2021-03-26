import React from 'react';
import styled from "styled-components";


const StyledLogo = styled.h2`
  font-family: "Merriweather", serif;
  font-weight: 800;
	font-size: 1.7rem ;
  color: #D10068;
  margin: 0 50px 0 0 !important;
  @media (max-width: 575px) {
		font-size: 1rem;
	}

`
const Thin = styled.span`
	font-weight:300;
  color: black;
	

`

const Logo = () => {
  return (
    <StyledLogo>
      <Thin>JavaScript</Thin> Articles
    </StyledLogo>
  );
}

export default Logo;
