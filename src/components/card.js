import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
background-color: hsl(0, 0%, 68%, .1);
padding: 20px;
box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.1);
`;

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
}

export default Card;
