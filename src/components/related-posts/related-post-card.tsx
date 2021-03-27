import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Img from 'gatsby-image';
import {
  PostCardWrapper,
  PostPreview,
  PostDetails,
  PostDate,
  PostTitle,
  Excerpt,
  PostContent,
  PostTags,
} from './related-post-card.style';

interface PostCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  date?: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
}

const RelatedPostCard: React.FunctionComponent<PostCardProps> = ({
  image,
  title,
  description,
  url,
  date,
  tags,
  className,
  imageType,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['post_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            {imageType === 'fluid' ? (
              <Img fluid={image} alt="post preview" />
            ) : (
              <Img fixed={image} alt="post preview" />
            )}
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        

        <PostContent className="post_content">
          <PostTitle className="post_title">
            <Link to={url}>{title}</Link>
          </PostTitle>

          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>
          )}
        </PostContent>
      </PostDetails>
    </PostCardWrapper>
  );
};

RelatedPostCard.defaultProps = {
  imageType: 'fluid',
};

export default RelatedPostCard;
