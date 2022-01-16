import React from 'react'
import Scrollspy from 'react-scrollspy'
import styled from 'styled-components'
import { Color } from '../theme/colors'
const Nav = styled.nav`
	position: fixed;
	top: 15vh;
	right: calc(50% - 720px);
	margin-left: 36px;
	max-width: 250px;
	transition: all 0.5s;
	font-weight: 100;
	ul.toc-list {
		border-left: 1px solid #363636;
	}

	ul.toc-list > li {
		list-style-type: none;
		margin-left: 24px;
		font-size: 13px;
	}

	ul.toc-list > li > a {
		color: #333;
		text-decoration: none;
		border-bottom: 0;
		transition: 0.2s all ease;
		font-weight: 200;
	}

	ul.toc-list > li.is-current > a {
		color: ${Color.primary.color};
		font-weight: 500;
		transition: all 0.5s;
	}

	/* Hide Table of Content when screen is smaller than 1440px */
	@media only screen and (max-width: 1439px) {
		display: none !important;
	}
`

export default function TableOfContents(props) {
	const { post } = props
	let url = post.items.map(function (post) {
		return post['url'].substring(1)
	})

	return (
		<Nav>
			<Scrollspy items={url} currentClassName='is-current' className='toc-list'>
				{post.items.map((p) => (
					<li key={p.url}>
						<a href={p.url}>{p.title}</a>
					</li>
				))}
			</Scrollspy>
		</Nav>
	)
}
