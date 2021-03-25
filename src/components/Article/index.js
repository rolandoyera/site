import React from 'react';
import styled from "styled-components";

const SyledArticle = styled.article`
max-width:700px;
margin: 0 auto;
`

const Article = ({ children }) => {
  return (
    <SyledArticle>
      {children}
    </SyledArticle>
  );
}

export default Article;
