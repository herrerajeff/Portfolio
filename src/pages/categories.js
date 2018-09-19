import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout } from '../components/layout';
import { Wrapper } from '../components/elements';
import { media } from '../utils/media';
import SEO from '../components/seo';

const AllCategoryTitle = styled.h3`
  display: block;
  font-size: 1.3em;
  margin: 0 !important;
  margin-bottom: 3em !important;
  @media ${media.phone} {
    font-size: 1.5em;
  }
`;

const CategoryWrapper = styled.div`
  padding: 3em 0;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${media.s} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${media.m} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${media.l} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  grid-gap: 1em;
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  margin: 0;
  min-height: 200px;
  line-height: 1em;
  padding: 1em 1.5em;
  border-radius: 5px;
  color: hsla(200, 5%, 0%, 50%);
  background-color: hsla(200, 80%, 20%, 0.1);
  transition: all 0.25s ease;
  text-transform: uppercase;
  font-size: 0.875em;
  &:hover {
    text-decoration: none !important;
    font-style: normal !important;
    color: white;
    background-color: #222;
  }
`;

const Category = props => {
  const { group } = props.data.allContentfulBlogPost;

  return (
    <Layout>
      <Helmet title="Categories" />
      <CategoryWrapper>
        <Wrapper>
          <AllCategoryTitle>All Categories</AllCategoryTitle>
          <CategoryList>
            {group.map(category => (
              <CategoryLink to={`/${kebabCase(category.fieldValue)}`}>
                {category.fieldValue} ({category.totalCount})
              </CategoryLink>
            ))}
          </CategoryList>
        </Wrapper>
      </CategoryWrapper>
    </Layout>
  );
};

export default Category;

/* eslint no-undef: off */
export const postQuery = graphql`
  query CategoriesPage {
    allContentfulBlogPost {
      group(field: category) {
        totalCount
        fieldValue
      }
    }
  }
`;
