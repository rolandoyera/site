import styled from 'styled-components';
import {Color} from '../../theme/colors'

const ScrollUpButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${Color.primary.color};
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: all 0.25s ease-in-out;
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    background-color: ${Color.primary.hover};
  }
`;

export default ScrollUpButtonWrapper;
