import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from '../components/layout';
import { Wrapper } from '../components/elements';
import { text, header } from '../utils/theme';
import { media } from '../utils/media';

const WorkList = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding: 3em 0;
  @media ${media.m} {
    grid-template-columns: 1fr 1fr;
  }
  li {
    margin: 0;
  }
`;

const WorkLink = styled(Link)`
  width: 100%;
  display: block;
  border-bottom: none !important;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: transparent !important;
    font-style: normal;
    text-decoration: none;
  }
  @media ${media.m} {
    cursor: pointer !important;
  }
  div {
    &:first-of-type {
      transition: all 0.25s ease;
      overflow: hidden;
    }
  }
`;

const Descriptor = styled.div.attrs({
  background: props => props.background || 'yellow',
})`
  padding: 1em 0;
  transition: all 0.25s ease;
  @media ${media.m} {
    padding: 1.5em;
    display: grid;
    grid-template-rows: auto 1fr;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: ${props => props.background};
    opacity: 0;
    &:hover {
      opacity: 1;
      font-style: normal;
    }
  }
  @media ${media.l} {
    padding: 2.5em 3em;
  }
  h2 {
    font-size: 1em;
    @media ${media.m} {
      margin-bottom: 1.5em;
      color: ${header};
    }
  }
  p {
    line-height: 1.5em;
    font-size: 1.1em;
    width: 100%;
    font-weight: 400;
    color: hsla(200, 5%, 0%, 50%);
    margin-bottom: 0;
    strong {
      color: #222;
    }
    @media ${media.l} {
      width: 100%;
    }
    @media ${media.m} {
      color: ${text};
      strong {
        color: ${header};
      }
    }
  }
`;

const Home = ({
  data: {
    allContentfulProject: { edges },
  },
}) => (
  <Layout>
    <Helmet title="Designer" />
    <Wrapper>
      <WorkList>
        {edges.map(({ node: { title, cover, description, slug, id, mode, color } }) => (
          <li key={id}>
            <WorkLink to={slug}>
              <Img key={cover.sizes.src} alt={title} sizes={cover.sizes} aspectRatio={cover.sizes.aspectRatio} />
              <ThemeProvider theme={{ mode: `${mode}` }}>
                <Descriptor background={color}>
                  <h2>{title}</h2>
                  <p> {description.description} </p>
                </Descriptor>
              </ThemeProvider>
            </WorkLink>
          </li>
        ))}
      </WorkList>
    </Wrapper>
  </Layout>
);

export default Home;

export const query = graphql`
  query Index {
    allContentfulProject(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          mode
          color
          description {
            description
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
