import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Card } from '../components/card';
import { Layout } from '../components/layout';
import { Wrapper, BlogList } from '../components/elements';
import SEO from '../components/seo';

const Blog = ({
  data: {
    allContentfulBlogPost: { edges },
  },
}) => (
  <Layout>
    <Helmet title="Blog" postPath="https://www.jeffreyherrera.com/blog" />
    <Wrapper>
      <BlogList>
        {edges.map(({ node: { title, date, excerpt, slug, timeToRead, category, featured, post } }) => (
          <Card
            title={title}
            date={date}
            excerpt={excerpt}
            timeToRead={timeToRead}
            slug={slug}
            category={category}
            key={slug}
            alt={title}
            sizes={featured.sizes}
            aspectRatio={featured.sizes.aspectRatio}
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
          featured {
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
