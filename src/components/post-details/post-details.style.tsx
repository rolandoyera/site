import styled from 'styled-components'
import { Font } from '../../theme/font'
import { Color } from '../../theme/colors'

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
`

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
`

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
`

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
`

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
`

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
		color: black;
		background-color: #f7f7f7;
		line-height: 1.6;
		margin: 60px 0;
		padding: 50px !important;
		font-style: italic;
		font-weight: ${Font.weight.bold};
		font-size: ${Font.size.lg};
		text-align: center;
		position: relative;
		z-index: 1;
	}
	blockquote::before {
		color: black;
		content: ' “ ';
		position: absolute;
		left: 30px;
		top: -140px;
		z-index: -1;
		font-family: 'boxicons';
		font-size: 300px;
		font-weight: 900;
		opacity: 0.2;
	}
	blockquote::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background-color: grey;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	a {
		font-weight: ${Font.weight.bold};
		transition: 0.15s ease-in-out;
		color: ${Color.primary.color};
	}
	.important p:before {
		content: '';
		border-top: 2px solid ${Color.primary.color};
		border-left: 2px solid ${Color.primary.color};
		display: inline-block;
		width: 14rem;
		height: 3.25rem;
		position: absolute;
		top: -6px;
		left: -6px;
	}
	.important p:after {
		content: '';
		border-bottom: 2px solid ${Color.primary.color};
		border-right: 2px solid ${Color.primary.color};
		display: inline-block;
		width: 14rem;
		height: 3.25rem;
		position: absolute;
		bottom: -6px;
		right: -6px;
	}
	.important:before {
		content: '!';
		top: 10px;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0.5rem;
		border-radius: 50%;
		width: 1.3rem;
		height: 1.3rem;
		background-color: ${Color.primary.color};
		color: white;
		font-size: 13px;
		font-weight: 600;
	}
	.important {
		position: relative;
		background-color: ${Color.primary.light};
		margin: 3.5rem 1.25rem 3.5rem 1.25rem;
	}
	.important p {
		width: 100%;
		min-height: 100px;
		padding: 1.5rem 2rem 2rem 2.8rem;
		display: flex;
		align-items: center;
	}
`

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
`
