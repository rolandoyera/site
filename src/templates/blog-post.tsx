import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import _ from 'lodash'
import urljoin from 'url-join'
// import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import RelatedPostCard from '../components/related-posts/related-post-card'
import PostDetails from '../components/post-details/post-details'
import Article from '../components/Article'
import { PostContainer } from '../components/post-details/post-details.style'
import { ShortCodes } from '../components/ShortCodes'
import TableOfContents from './TableOfContents'

import { FacebookShareButton, TwitterShareButton, RedditShareButton } from 'react-share'
import { IoLogoFacebook, IoLogoTwitter, IoLogoReddit } from 'react-icons/io'
import {
	BlogPostDetailsWrapper,
	RelatedPostWrapper,
	RelatedPostItems,
	RelatedPostTitle,
	RelatedPostItem,
	BlogPostFooter,
	PostShare,
	PostTags,
	BlogPostComment,
} from './templates.style'

const BlogPostTemplate = (props: any) => {
	const post = props.data.mdx
	const { edges } = props.data.allMdx
	const title = post.frontmatter.title
	const readingTime = post.fields.readingTime.text
	const slug = post.fields.slug
	const siteUrl = props.data.site.siteMetadata.siteUrl
	const shareUrl = urljoin(siteUrl, slug)

	const disqusConfig = {
		shortname: process.env.GATSBY_DISQUS_NAME,
		config: { identifier: slug, title },
	}
	/* prettier-ignore-start */
	const schema = {
		// prettier-ignore
		"@type": "NewsArticle",
		// prettier-ignore
		"headline": `${title}`,
		// prettier-ignore
		"image": [`https://javascriptarticles.com`],
		// prettier-ignore
		"datePublished": post.frontmatter.date,
		// prettier-ignore
		"author": [
			{
				'@type': 'Person',
        // prettier-ignore
				"name": 'Rolando Yera',
			},
		],
	}
	/* prettier-ignore-end */
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				canonical={post.frontmatter.canonical}
				image={post.frontmatter.cover.publicURL}
				date={new Date(post.frontmatter.date)}
				ogType={'article'}
				url={`https://javascriptarticles${slug}`}
				schemaMarkup={schema}
			/>
			<BlogPostDetailsWrapper>
				<Article>
					<PostDetails
						title={post.frontmatter.title}
						date={post.frontmatter.date}
						readingTime={readingTime}
						preview={post.frontmatter.cover == null ? null : post.frontmatter.cover.childImageSharp.fluid}
						imagePosition='top'
					/>

					<PostContainer>
						<MDXProvider components={ShortCodes}>
							{!!post.tableOfContents.items && <TableOfContents post={post.tableOfContents} />}
							<MDXRenderer>{post.body}</MDXRenderer>
						</MDXProvider>
					</PostContainer>
					<BlogPostFooter className={post.frontmatter.cover == null ? 'center' : ''}>
						{post.frontmatter.tags == null ? null : (
							<PostTags className='post_tags'>
								{post.frontmatter.tags.map((tag: string, index: number) => (
									<Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
										{`#${tag}`}
									</Link>
								))}
							</PostTags>
						)}
						<PostShare>
							<span>Share This:</span>
							<FacebookShareButton url={shareUrl} quote={post.excerpt}>
								<IoLogoFacebook />
							</FacebookShareButton>
							<TwitterShareButton url={shareUrl} title={title}>
								<IoLogoTwitter />
							</TwitterShareButton>

							<RedditShareButton url={shareUrl} title={`${post.frontmatter.title}`}>
								<IoLogoReddit />
							</RedditShareButton>
						</PostShare>
					</BlogPostFooter>
				</Article>
				{/* <BlogPostComment
          className={post.frontmatter.cover == null ? 'center' : ''}
        >
          <DiscussionEmbed {...disqusConfig} />
        </BlogPostComment> */}
			</BlogPostDetailsWrapper>

			{edges.length !== 0 && (
				<RelatedPostWrapper>
					<RelatedPostTitle>Related Posts</RelatedPostTitle>
					<RelatedPostItems>
						{edges.map(({ node }: any) => (
							<RelatedPostItem key={node.fields.slug}>
								<RelatedPostCard
									title={node.frontmatter.title || node.fields.slug}
									url={node.fields.slug}
									image={node.frontmatter.cover == null ? null : node.frontmatter.cover.childImageSharp.fluid}
									date={post.frontmatter.date}
									tags={node.frontmatter.tags}
								/>
							</RelatedPostItem>
						))}
					</RelatedPostItems>
				</RelatedPostWrapper>
			)}
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $tag: [String!]) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id

			body
			tableOfContents
			fields {
				readingTime {
					text
				}
				slug
			}
			frontmatter {
				title
				date(formatString: "DD MMM, YYYY")
				description
				tags
				cover {
					publicURL
					childImageSharp {
						fluid(maxWidth: 1170, quality: 90) {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
						}
					}
				}
			}
		}
		allMdx(
			limit: 3
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: $tag }, published: { eq: true } }, fields: { slug: { ne: $slug } } }
		) {
			edges {
				node {
					fields {
						readingTime {
							text
						}
						slug
					}
					frontmatter {
						title
						tags
						canonical
						cover {
							publicURL
							childImageSharp {
								fluid(maxWidth: 480, maxHeight: 285, quality: 90) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	}
`
