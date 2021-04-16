import styled from 'styled-components';
import {Color} from '../../theme/colors'
import {Font} from '../../theme/font'

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
  flex-direction: column;
`;

export const PostDate = styled.div`
  font-size: .9rem;
  font-weight: 200;
  line-height: 1;
  color: ${Color.text};


  > span {
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
  }
`;

export const PostContent = styled.div`
  align-self: start;
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
  font-weight: 400;
  line-height: 2;
  margin-bottom: 0;
  @media (max-width: 990px) {
    font-size: 14px;
  }
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
      margin-right: 25px;
    }
  }
`;
