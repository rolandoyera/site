import styled from 'styled-components';
import {Font} from '../../theme/font'
import {Color} from '../../theme/colors'

export const PostCardWrapper = styled.article`
  position: relative;
  &:hover {
    .post_preview {
      transform: translateY(0);
    }
    .post_date {
      transform: translateY(100%);
    }
  }
`;

export const PostPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: 0.35s ease-in-out;
  img {
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    transform: translateY(0);
  }
  @media (max-width: 575px) {
    margin-bottom: 30px;
    width: auto;
    height: auto;
    position: relative;
    transform: translateY(0);
  }
`;

export const PostDetails = styled.div`
  display: flex;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const PostDate = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Color.text};
  transition: 0.35s ease-in-out;
  @media (max-width: 1200px) {
    font-size: 70px;
  }
  @media (max-width: 990px) {
    font-size: 56px;
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
  font-size: ${Font.size.h2};
  font-weight: ${Font.heading.weight};
  color: ${Color.text};
  line-height: ${Font.heading.height};
  margin-bottom: 10px;
  font-family: ${Font.family.sans};
  a {
    color: ${Color.text};
  }

`;

export const Excerpt = styled.p`
  font-size: ${Font.size.md};
  color: ${Color.text};
  font-weight: 300;
  margin-bottom: 0;
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;

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

export const PostDateAndPreview = styled.div`
  position: relative;
  margin-right: 45px;
  flex-shrink: 0;
  overflow: hidden;
  height: 170px;
  width: 170px;
  @media (max-width: 1200px) {
    margin-right: 35px;
  }
  @media (max-width: 990px) {
    margin-right: 25px;
  }
  @media (max-width: 575px) {
    height: auto;
    width: auto;
  }
`;

export const ReadMore = styled.div`
  margin-top: 16px;
  a {
    font-size: ${Font.size.sm};;
    font-weight: 500;
    color: ${Color.text};
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${Color.primary.color};
    }
  }
`;
