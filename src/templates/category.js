import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { Card } from '../components/card';
import { media } from '../utils/media';
import { Wrapper, BlogList } from '../components/elements';

const CategoryTitle = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  margin-bottom: 1em;
  @media ${media.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
  h3,
  p {
    margin: 0 !important;
  }
  h3 {
    font-size: 1.3em;
    @media ${media.phone} {
      font-size: 1.5em;
      margin-bottom: 0.5em !important;
    }
  }
  p {
    &:before {
      content: '·';
      margin: 0 0.5em;

      @media ${media.phone} {
        display: none;
      }
    }
    font-size: 0.75em;
    @media ${media.phone} {
      font-size: 0.875em !important;
    }
  }
`;

const CategoryWrapper = styled.div`
  padding: 3em 0 0;
`;

const Category = props => {
  const { category } = props.pageContext;
  const { edges, totalCount } = props.data.allContentfulBlogPost;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`;
  return (
    <Layout>
      <Helmet title={`${category}`} />
      <CategoryWrapper>
        <Wrapper>
          <CategoryTitle>
            <h3>Category &ndash; {category} </h3>
          </CategoryTitle>
          <div>
            {subline} (See <Link to="/categories">all categories</Link>)
          </div>
          <BlogList>
            {edges.map(({ node: { title, date, excerpt, slug, timeToRead, cover, post } }) => (
              <Card
                title={title}
                date={date}
                excerpt={excerpt}
                timeToRead={timeToRead}
                slug={slug}
                category={category}
                key={slug}
                alt={title}
                sizes={cover.sizes}
                aspectRatio={cover.sizes.aspectRatio}
              >
                <div dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }} />
              </Card>
            ))}
          </BlogList>
        </Wrapper>
      </CategoryWrapper>
    </Layout>
  );
};

export default Category;

/* eslint no-undef: off */
export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }, filter: { category: { eq: $category } }) {
      totalCount
      edges {
        node {
          title
          category
          slug
          date(formatString: "MMM DD, YYYY")
          post {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
          cover {
            id
            sizes(maxWidth: 800, quality: 100) {
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
        }
      }
    }
  }
`;
