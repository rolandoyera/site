import React from 'react';
import styled from "styled-components";
import { Font } from '../../theme/font'
import { Color } from '../../theme/colors'


const StyledLogo = styled.h2`
  font-family: ${Font.family.serif};
  letter-spacing: -.9px;
  font-weight: 900;
	font-size: 1.4rem ;
  color: ${Color.primary.color};
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
      <Thin>JavaScript</Thin>Articles
    </StyledLogo>
  );
}

export default Logo;
