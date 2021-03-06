import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from './style';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io';

type IntroProps = {};

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

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/rolando-yera.png/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.fluid;

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! I’m <b>{author}</b>
        </IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;
