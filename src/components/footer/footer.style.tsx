import styled from 'styled-components';
import {Color} from '../../theme/colors'
import {Font} from '../../theme/font'

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${Color.text};
  font-size: ${Font.size.md};
  padding: 30px 15px;
  text-align: center;
  border-top: 1px solid ${Color.borderLight};
  margin-top: 120px;
  @media (max-width: 1200px) {
    margin-top: 90px;
  }
  @media (max-width: 990px) {
    margin-top: 90px;
  }
  @media (max-width: 575px) {
    margin-top: 60px;
    padding: 22px 15px;
  }

  a {
    color: ${Color.text};
    font-size: ${Font.size.md};
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${Color.primary.color};
    }
  }
`;

export default FooterWrapper;
