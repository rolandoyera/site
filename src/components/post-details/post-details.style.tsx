import styled from 'styled-components';
import {Font} from '../../theme/font'
import {Color} from '../../theme/colors'

export const PostDetailsWrapper = styled.div`
  position: relative;

  &.image_left {
    @media (min-width: 991px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }
    .post_preview {
      margin-top: 0;
      @media (min-width: 991px) {
        flex: 0 0 42%;
        max-width: 42%;
        padding-right: 60px;
        margin: 0;
        &:before {
          width: calc(80% - 60px);
        }
      }
    }
    .post_des_wrapper {
      @media (min-width: 991px) {
        flex: 0 0 58%;
        max-width: 58%;
        margin: 0;
      }
      .post_des {
        margin-top: 60px;
      }
    }
  }
`;

export const PostTitle = styled.h1`
  max-width: 740px;  
  text-align: center;
  margin: 0 auto;
  font-family: ${Font.family.sans};
  font-size: ${Font.size.h1};
  font-weight: ${Font.heading.weight};
  color: ${Color.text};
  line-height: ${Font.heading.height};
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    margin-bottom: 15px;
  }

`;

export const PostDate = styled.span`
text-align: center;
  display: block;
  font-size: ${Font.size.md};
  color: ${Color.text};
  font-weight: ${Font.weight};
  text-transform: uppercase;
  @media (max-width: 990px) {
    ${Font.size.sm};
  }
`;

export const PostPreview = styled.div`
  margin-top: 45px;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
  @media (max-width: 575px) {
    margin-top: 35px;
  }

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

export const PostDescriptionWrapper = styled.div`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 870px;
  max-width: 100%;
  @media (max-width: 1200px) {
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
`;

export const PostContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;

  .mermaid {
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }

  h2 {
    font-size: ${Font.size.h2};
    margin-bottom: 0.75em;
  }

  h3 {
    font-size: 21px;
  }

  h4 {
    font-size: 17px;
  }

  h5 {
    font-size: 15px;
  }

  h6 {
    font-size: 13px;
  }


  blockquote {
    font-family: ${Font.family.sans};
    font-size: 21px;
    line-height: 2;
    margin: 60px 0;
    @media (max-width: 1200px) {
      margin: 50px 0;
      font-size: 19px;
    }
    @media (max-width: 575px) {
      margin: 40px 0;
      font-size: 15px;
    }
    &:before,
    &:after {
      content: '';
      width: 30px;
      height: 1px;
      display: block;
      background: ${Color.text};
    }
    &:before {
      margin-bottom: 60px;
      @media (max-width: 1200px) {
        margin-bottom: 50px;
      }
      @media (max-width: 575px) {
        margin-bottom: 40px;
      }
    }
    &:after {
      margin-top: 60px;
      @media (max-width: 1200px) {
        margin-top: 50px;
      }
      @media (max-width: 575px) {
        margin-top: 40px;
      }
    }

    p {
      font-size: 21px;
      font-weight: 500;
      line-height: 2;
      margin-bottom: 23px;
      @media (max-width: 1200px) {
        font-size: 19px;
      }
      @media (max-width: 1200px) {
        font-size: 17px;
      }
      @media (max-width: 575px) {
        font-size: 15px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    h4 {
      font-size: 16px;
      margin: 0;
      font-weight: 400;
    }
  }

  a {
    font-weight: ${Font.weight.bold};
    transition: 0.15s ease-in-out;
    color: ${Color.primary.color};
  }
`;

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 60px;

  a {
    display: block;
    margin-right: 30px;
    font-size: ${Font.size.md};
    font-weight: ${Font.weight.md};
    color: ${Color.primary.color};
  }
`;
