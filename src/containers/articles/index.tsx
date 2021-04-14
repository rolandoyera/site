import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import Posts from './posts';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from 'react-icons/io';
import { AboutWrapper, AboutImage, AboutPageTitle, AboutDetails, SocialProfiles, ImageContainer } from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/rolysface',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/rolandoyera/',
    tooltip: 'Instagram',
  },
  // {
  //   icon: <IoLogoTwitter />,
  //   url: '#',
  //   tooltip: 'Twitter',
  // },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/rolandoyera',
    tooltip: 'Github',
  },
];

const Darker = styled.div`
background-color: rgba(0,0,0,1);
opacity: 1;
`;

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/javascript-articles.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h1>Articles</h1>
        <p>

        </p>
      </AboutPageTitle>
            <Darker>
      <ImageContainer>
        <AboutImage>
        <Image style={{zIndex: '-1', position: 'relative'}} fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>
    </ImageContainer>
    </Darker>
      <AboutDetails>
        <Posts />
        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
