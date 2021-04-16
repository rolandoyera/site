import styled from 'styled-components';
import {Font} from '../../../theme/font'
import {Color} from '../../../theme/colors'

const BlogPostsWrapper = styled.main`
  margin: 60px auto 0;
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
  font-size: ${Font.size.lg};
  font-weight: ${Font.weight.bold};
  font-family: ${Font.family.sans};
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
