import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import urljoin from "url-join";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/post-card/post-card";
import PostDetails from "../components/post-details";
import ButtonLoader from "../components/ButtonLoader";
import Card from "../components/card";
import Article from '../components/Article'
import Button from '../components/Button'
import {
	FacebookShareButton,
	TwitterShareButton,
	PinterestShareButton,
	RedditShareButton,
} from "react-share";
import {
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoPinterest,
	IoLogoReddit,
} from "react-icons/io";
import {
	BlogPostDetailsWrapper,
	RelatedPostWrapper,
	RelatedPostItems,
	RelatedPostTitle,
	RelatedPostItem,
	BlogPostFooter,
	PostShare,
	PostTags,
	PostTagsFooter,
	BlogPostComment,
} from "./templates.style";

interface IProps {
    children: any;
    // any other props that come into the component
}

const shortcodes = {
	ButtonLoader: ({ children, ...props }: IProps) => <ButtonLoader {...props}>{children}</ButtonLoader>,
	Card: ({ children, ...props }: IProps) => <Card {...props}>{children}</Card>,
  Button: ({ children, ...props }: IProps) => <Button {...props}>{children}</Button>,
};

const BlogPostTemplate = (props: any) => {
	const post = props.data.mdx;
	const { edges } = props.data.allMdx;
	const title = post.frontmatter.title;
	const slug = post.fields.slug;
	const siteUrl = props.data.site.siteMetadata.siteUrl;
	const shareUrl = urljoin(siteUrl, slug);


	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				canonical={post.frontmatter.canonical}
			/>
			<BlogPostDetailsWrapper style={{ maxWidth: "900px" }}>
				{post.frontmatter.tags == null ? null : (
					<PostTags className='post_tags'>
						{post.frontmatter.tags.map((tag: string, index: number) => (
							<Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
								{`#${tag}`}
							</Link>
						))}
					</PostTags>
				)}
				<PostDetails
					title={post.frontmatter.title}
					date={post.frontmatter.date}
					preview={
						post.frontmatter.cover == null
							? null
							: post.frontmatter.cover.childImageSharp.fluid
					}
					imagePosition='top'
				/>
				<Article>
					<MDXProvider components={shortcodes}>
						<MDXRenderer>{post.body}</MDXRenderer>
					</MDXProvider>

					<BlogPostFooter
						className={post.frontmatter.cover == null ? "center" : ""}
					>
						{post.frontmatter.tags == null ? null : (
							<PostTagsFooter className='post_tags_footer'>
								{post.frontmatter.tags.map((tag: string, index: number) => (
									<Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
										{`#${tag}`}
									</Link>
								))}
							</PostTagsFooter>
						)}
						<PostShare>
							<span>Share This:</span>
							<FacebookShareButton url={shareUrl} quote={post.excerpt}>
								<IoLogoFacebook />
							</FacebookShareButton>
							<TwitterShareButton url={shareUrl} title={title}>
								<IoLogoTwitter />
							</TwitterShareButton>
							<PinterestShareButton
								url={shareUrl}
								media={urljoin(siteUrl, post.frontmatter.cover.publicURL)}
							>
								<IoLogoPinterest />
							</PinterestShareButton>
							<RedditShareButton
								url={shareUrl}
								title={`${post.frontmatter.title}`}
							>
								<IoLogoReddit />
							</RedditShareButton>
						</PostShare>
					</BlogPostFooter>
				</Article>
				<BlogPostComment
					className={post.frontmatter.cover == null ? "center" : ""}
				>

				</BlogPostComment>
			</BlogPostDetailsWrapper>

			{edges.length !== 0 && (
				<RelatedPostWrapper>
					<RelatedPostTitle>Related Posts</RelatedPostTitle>
					<RelatedPostItems>
						{edges.map(({ node }: any) => (
							<RelatedPostItem key={node.fields.slug}>
								<PostCard
									title={node.frontmatter.title || node.fields.slug}
									url={node.fields.slug}
									image={
										node.frontmatter.cover == null
											? null
											: node.frontmatter.cover.childImageSharp.fluid
									}
									tags={node.frontmatter.tags}
								/>
							</RelatedPostItem>
						))}
					</RelatedPostItems>
				</RelatedPostWrapper>
			)}
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $tag: [String!]) {
		site {
			siteMetadata {
				siteUrl
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			fields {
				slug
			}
			frontmatter {
				title
				date(formatString: "DD MMM, YYYY")
				description
				canonical
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
			filter: {
				frontmatter: { tags: { in: $tag } }
				fields: { slug: { ne: $slug } }
			}
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						tags
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
`;
