import React from 'react'
import Scrollspy from 'react-scrollspy'
import styled from 'styled-components'

const Nav = styled.nav`


  position: fixed;
  top: 15vh;
  right: calc(50% - 720px);
  margin-left: 36px;
  max-width: 250px;

ul.toc-list {
  border-left: 1px solid #363636;
}

ul.toc-list > li {
  list-style-type: none;
  margin-left: 24px;
  font-size: 13px;
}

ul.toc-list > li > a {
  color: #c2c2c2;
  text-decoration: none;
  border-bottom: 0;
  transition: .2s all ease;
}

ul.toc-list > li.is-current > a {
  color: black;
}

/* Hide Table of Content when screen is smaller than 1440px */
@media only screen and (max-width: 1439px) {
  
    display: none !important;
  
}


`;

export default function TableOfContents(props) {
  const { post } = props
  let url = post.items.map(function (post) {
    return post['url'].substring(1)
  })
  console.log(post)

  return (
    <Nav>
      <Scrollspy items={url} currentClassName="is-current" className="toc-list">
        {post.items.map(p => (
          <li key={p.url}>
            <a href={p.url}>{p.title}</a>
          </li>
        ))}
      </Scrollspy>
    </Nav>
  )
}