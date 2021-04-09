import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/articles';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Articles"
        description=""
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
