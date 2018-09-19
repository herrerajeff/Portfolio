import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout } from '../components/layout';
import { CategoryLink } from '../components/card';
import { media } from '../utils/media';
import { text, fontL, footerGlow, footer, header } from '../utils/theme';
import { Wrapper } from '../components/elements';

const Main = styled.div`
  margin: 3em 0;
  font-size: ${fontL};
  line-height: 1.5em;
  color: #222;
  frame {
    margin: 4.5em 0;
  }
  iframe {
    background-color: white;
  }
  strong {
    color: #222 !important;
  }
  blockquote {
    background-color: white;
    margin: 0;
    padding: 1.5em;
    @media ${media.m} {
      padding: 3em 4em;
    }
  }
  figure {
    margin: 4.5em 0;
    max-width: 100%;
    img,
    video {
      margin-bottom: 0;
    }
    video {
      max-width: 100%;
    }
    span {
      box-shadow: 0 4px 10px -4px hsla(280, 40%, 10%, 0.1);
      position: relative;
    }
    figcaption {
      font-size: 0.75em;
      @media ${media.phone} {
        max-width: 100%;
      }
    }
  }
`;

const Meta = styled.div`
  font-size: 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid hsla(200, 80%, 20%, 0.05);
  padding-bottom: 2em;
  @media ${media.phone} {
    font-size: 0.75em;
  }
  p {
    margin-bottom: 0;
    font-weight: 400;
    color: ${text} !important;
  }
`;

const PostWrapper = styled.div`
  @media ${media.m} {
    padding: 9em 5em 3em;
  }
`;

const PostTitle = styled.h1`
  margin-bottom: 0.25em !important;
  font-size: 3.4em;
  @media ${media.s} {
    font-size: 4.8em;
  }
`;

const BackLink = styled(Link)`
  background-color: white;
  padding: 0.5em 1em;
  border-radius: 3px;
  margin-top: 2em;
  &:hover {
    text-decoration: none !important;
    font-style: normal !important;
    border-bottom: none;
    background-color: ${header};
    color: ${footer};
    box-shadow: 0px 3px 6px ${footerGlow};
  }
  &:before {
    content: '';
    display: block;
    height: 1px;
    width: 25%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: -2em;
    left: 0;
  }
`;

const Post = props => {
  const postData = props.data.contentfulBlogPost;
  return (
    <Layout>
      <Helmet title={`${postData.title}`} postPath={postData.slug} postNode={postData} description={postData.description.description} image={postData.featured.sizes.src} />
      <Wrapper>
        <PostWrapper>
          <PostTitle>{postData.title}</PostTitle>
          <Meta>
            <p>
              {postData.date} &mdash; {postData.post.childMarkdownRemark.timeToRead} Min Read &mdash; In{' '}
              <CategoryLink to={`${kebabCase(postData.category)}`}>{postData.category}</CategoryLink>
            </p>
          </Meta>
          <Main>
            <div dangerouslySetInnerHTML={{ __html: postData.post.childMarkdownRemark.html }} />
          </Main>
          <BackLink to="/blog"> &larr; Back to All Blogs</BackLink>
        </PostWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Post;

/* eslint no-undef: off */
export const postQuery = graphql`
  query posts($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      category
      description {
        description
      }
      featured {
        id
        sizes(maxWidth: 1280, quality: 100) {
          base64
          src
          srcSet
          srcWebp
          srcSetWebp
          aspectRatio
          sizes
          ...GatsbyContentfulSizes_withWebp
        }
      }
      date(formatString: "MMM DD, YYYY")
      post {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;
