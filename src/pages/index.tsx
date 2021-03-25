import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PersonalBlog from "../containers/home";
import SEO from "../components/seo";
import Searchbar from '../components/navbar/SearchBarHome'

const HomePage = (props: any) => {
	const { data } = props;

	return (
		<Layout>
			<SEO
				title='JavaScript Articles'
				description={data.site.siteMetadata.description}
			/>
      <Searchbar />
			<PersonalBlog />
		</Layout>
	);
};

export default HomePage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;