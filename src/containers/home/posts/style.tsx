import styled from 'styled-components';
import {Color} from '../../../theme/colors'
import {Font} from '../../../theme/font'

const BlogPostsWrapper = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  .post_card {
    margin-bottom: 120px;
    @media (max-width: 990px) {
      margin-bottom: 90px;
    }
    @media (max-width: 575px) {
      margin-bottom: 60px;
    }
  }
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 0 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 0 25px 0 25px;
  }
`;

export const SecTitle = styled.div`
  color: ${Color.text};
  font-size: ${Font.size.md};
  font-weight: 500;
  font-family: ${Font.heading};
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: '';
    width: 68px;
    height: 1px;
    background: ${Color.text};
    display: block;
    margin-top: 8px;
  }
`;

export default BlogPostsWrapper;
