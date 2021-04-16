import styled from 'styled-components';
import {Font} from '../../theme/font'
import {Color} from '../../theme/colors'

export const AboutWrapper = styled.div`
  position: relative;
  padding: 0 ;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`;

export const AboutPageTitle = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  z-index:2;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  h1 {
    font-size: ${Font.size.h1};
    margin: 0 auto;
    font-weight: 700;
    color: white !important;
    line-height: 1.53;
  }
`;

export const ImageContainer = styled.div`
  width: 100%; 
  height: 30vh; 
  position: relative;
  z-index:1; 
  overflow: hidden;

`;

export const AboutImage = styled.div`
position:relative;
margin-top: calc(-180px - 14.9vw);
z-index:0;
@media (max-width: 990px) {
      margin-top: -80px;
    }

`;

export const AboutDetails = styled.div`
  width: 870px;
  max-width: 100%;
  margin: 0 auto;
  h2 {
    color: ${Color.text};
    margin-bottom: 40px;
    @media (max-width: 990px) {
      margin-bottom: 30px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
`;
export const SocialProfiles = styled.div`
  margin: 0 auto;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: ${Color.text};
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`;
