import styled from 'styled-components';
import {Font} from '../../theme/font'
import {Color} from '../../theme/colors'

export const PostCardWrapper = styled.div`
  position: relative;
`;

export const PostPreview = styled.div`
  margin-bottom: 45px;
  position: relative;
  img {
    border-radius: 3px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: #757575;
    bottom: 0;
    left: 10%;
    filter: blur(15px);
  }
`;

export const PostDetails = styled.div`
  display: flex;
`;

export const PostDate = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  padding: 30px 35px 15px 35px;
  margin-right: 20px;
  line-height: 1;
  color: ${Color.text};
  @media (max-width: 1200px) {
    font-size: 70px;
    padding: 25px 25px 15px 25px;
    margin-right: 35px;
  }
  @media (max-width: 990px) {
    font-size: 56px;
    padding: 20px 20px 15px 20px;
    margin-right: 25px;
  }
  @media (max-width: 575px) {
    display: none;
  }

  > span {
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
  }
`;

export const PostContent = styled.div`
  align-self: center;
`;

export const PostTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${Color.text};
  line-height: 1.53;
  margin-bottom: 10px;
  a {
    color: ${Color.text};
  }
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 990px) {
    font-size: 21px;
    margin-bottom: 12px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Excerpt = styled.p`
  font-size: ${Font.size.md};
  color: ${Color.text};
  font-weight: ${Font.weight.md};
  line-height: ${Font.height};
  margin-bottom: 0;
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;

  a {
    display: block;
    margin-right: 30px;
    font-size: ${Font.size.md};
    font-weight: ${Font.weight.bold};
    color: ${Color.primary.color};
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`;
