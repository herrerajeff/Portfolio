import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Card } from '../components/card';
import { Layout } from '../components/layout';
import { Wrapper, BlogList } from '../components/elements';

const Blog = ({
  data: {
    allContentfulBlogPost: { edges },
  },
}) => (
  <Layout>
    <Helmet title="Blog" />
    <Wrapper>
      <BlogList>
        {edges.map(({ node: { title, date, excerpt, slug, timeToRead, category, cover, post } }) => (
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
  </Layout>
);

export default Blog;

/* eslint no-undef: off */
export const BlogQuery = graphql`
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          date(formatString: "MMM DD, YYYY")
          category
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
