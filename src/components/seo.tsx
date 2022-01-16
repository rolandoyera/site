import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
	description?: string
	lang?: string
	meta?: any
	keywords?: any
	title: string
	canonical?: string
	image?: string
	date?: any
	ogType?: string
	url?: string
}

const SEO: React.FunctionComponent<SEOProps> = ({ description, canonical, lang, meta, keywords, title, image, date, ogType, url }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
				allMdx {
					nodes {
						frontmatter {
							canonical
							cover {
								publicURL
							}
						}
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	console.log('LOG', site)

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			link={canonical ? [{ rel: 'canonical', key: canonical, href: canonical }] : []}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `${ogType ? ogType : 'website'}`,
				},
				{
					property: `og:image`,
					content: `${image ? `https://javascriptarticles.com${image}` : ''}`,
				},
				{
					property: `og:url`,
					content: url,
				},
				{
					property: `og:site_name`,
					content: `Javascript Articles`,
				},
				{
					property: `twitter:card`,
					content: `summary`,
				},
				{
					property: `twitter:creator`,
					content: '@rolandoyera',
				},
				{
					property: `twitter:title`,
					content: title,
				},
				{
					property: `twitter:image`,
					content: `${image ? `https://javascriptarticles.com${image}` : ''}`,
				},
				{
					property: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: []
				)
				.concat(meta)}>
			{date ? (
				<script type='application/ld+json'>{`"@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "${title}",
      "image": [
        "https://javascriptarticles.com${image}"
       ],
      "datePublished": "${date}",
      "author": [{
          "@type": "Person",
          "name": "Rolando Yera"
        }]
    `}</script>
			) : null}
		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	description: ``,
}

export default SEO
