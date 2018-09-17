import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { fontL, text } from '../utils/theme';
import { Layout } from '../components/layout';
import { Wrapper } from '../components/elements';
import SEO from '../components/seo';
import { media } from '../utils/media';

const ProjectMain = styled.div.attrs({
  background: props => props.background || 'yellow',
})`
  font-size: ${fontL};
    span {
      color: #222;
    }
  }
  p {
    text-transform: none;
    font-weight: 400 !important;
    font-family: 'IBM Plex Sans';
  }
  vidembed {
    display: block;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    iframe, object, embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  figure {
    margin: 2em 0;
    max-width: 100%;
    @media ${media.m} {
      margin: 5em 0;
    }
    twitterwidget {
     margin: 0 auto !important;
    }
    img,
    video {
      margin-bottom: 0;
      max-width: 100%;
      width: 100%;
    }
    video {
      max-width: 100%;
    }
    span {
      position: relative;
    }
    figcaption {
      font-size: 0.75em;
    }
  }
  projecttext {
    display: block;
    font-size: 1em;
    display: grid;
    line-height: 1.5;
    grid-template-columns: 1fr;
    color: ${text} !important;
    margin: 3em 0;
    @media ${media.m} {
      grid-gap: 2em;
      margin: 5em 0;
      grid-template-columns: 1fr 1fr;
    }
    p {
      &:first-of-type {
        font-size: 1.75em;
        color: #222;
        grid-column-end: span 2;
        @media ${media.m} {
          margin-bottom: 0;
        }
        span {
          opacity: 0.3;
          max-width: 50%;
        }
      }
      &:nth-of-type(2) {
        grid-column-start: 2;
      }
    }
  }
  half {
    margin: 3em 0;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 1fr;
    @media ${media.m} {
      margin: 5em 0;
      grid-template-columns: 1fr 1fr;
    }
    figure {
      margin: 0;
    }
  }
  results {
    display: block;
    margin: 3em 0;
    @media ${media.m} {
      margin: 5em 0;
    }
    data {
      padding: 2em;
      background-color: white;
      display: flex;
      justify-content: space-between;
      margin-top: 2em;
      flex-direction: column;
      @media ${media.m} {
        flex-direction: row;
      }
      p {
        font-size: 1.5em;
        line-height: 1.5;
        margin-bottom: 0;
        span {
          color: #222;
        }
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
        @media ${media.m} {
          margin-bottom: 0;
          flex-direction: column;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        p {
          margin-right: 1em;
        }
        &:first-of-type {
          text-align: left;
        }
        &:nth-of-type(2) {
          text-align: center;
        }
        &:last-of-type {
          text-align: right;
        }
      }
    }
    h4 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
  }
`;

const Project = props => {
  const projectData = props.data.contentfulProject;
  const { next, prev } = props.pageContext;
  return (
    <Layout
      isProject
      projectTheme={{ mode: `${projectData.mode}` }}
      projectTitle={`${projectData.title}`}
      projectColor={`${projectData.color}`}
      projectDescription={projectData.description.description}
      projectAreas={projectData.areas}
      mode="day"
      next={next}
      prev={prev}
    >
      <SEO postPath={projectData.slug} postNode={projectData} postSEO />
      <Helmet title={`${projectData.title}`} />
      <Img
        key={projectData.featured.sizes.src}
        alt={projectData.title}
        sizes={projectData.featured.sizes}
        aspectRatio={projectData.featured.sizes.aspectRatio}
      />
      <ProjectMain background={`${projectData.color}`}>
        <Wrapper>
          <div dangerouslySetInnerHTML={{ __html: projectData.body.childMarkdownRemark.html }} />
        </Wrapper>
      </ProjectMain>
    </Layout>
  );
};

export default Project;

/* eslint no-undef: off */
export const projectQuery = graphql`
  query projects($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      order
      id
      title
      mode
      description {
        description
      }
      color
      areas
      body {
        childMarkdownRemark {
          html
        }
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
    }
  }
`;
