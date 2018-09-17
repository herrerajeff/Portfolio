import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { text, soft } from '../utils/theme';
import { media } from '../utils/media';

const _ = require('lodash');

const Cards = styled.div``;

const CardWrapperFull = styled.div`
  background-color: hsla(200, 80%, 20%, 0.03);
  height: 100%;
  border-radius: 3px;
  width: 100%;
  p {
    color: #222;
    font-size: 0.875em;
    @media ${media.tablet} {
      font-size: 1em;
    }
  }
  hr {
    width: 1.3em;
    height: 2px;
    margin-top: 2em;
  }
`;

const CardWrapper = styled(Link)`
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  align-items: space-between;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  &:after {
    display: none !important;
  }
  &:hover {
    text-decoration: none !important;
    font-style: normal !important;
    transform: translateY(-4px);
    box-shadow: 0 15px 40px -5px hsla(250, 60%, 30%, 25%);
  }
`;

const CardItem = styled.div`
  padding: 1em 1em 2em;
`;

const Meta = styled.div`
  font-size: 0.5em;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid hsla(200, 80%, 20%, 0.05);
  padding-bottom: 1em;
  @media ${media.phone} {
    font-size: 0.75em;
  }
  p {
    margin-bottom: 0;
    font-weight: 400;
    color: ${text} !important;
  }
`;

const PostTitle = styled.h2`
  font-size: 1.2em;
  margin: 0 !important;
  text-transform: none !important;
  font-family: 'IBM Plex Sans';
  line-height: 1.25em !important;
  @media ${media.phone} {
    font-size: 1.5em;
  }
`;

const PostContent = styled.div`
  margin-top: 1em;
  padding-right: 1em;
  p {
    font-size: 1em;
    line-height: 1.5em;
  }
`;

const CoverImg = styled(Img)`
  max-height: 300px;
  align-self: end;
  img {
    margin: 0;
    object-position: top center !important;
  }
  @media ${media.m} {
    height: 100%;
  }
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  margin: 0;
  height: auto;
  border-bottom: none;
  line-height: 1em;
  padding: 8px 12px;
  border-radius: 5px;
  color: hsla(200, 5%, 0%, 50%);
  background-color: hsla(200, 80%, 20%, 0.05);
  transition: all 0.25s ease;
  &:after {
    display: none !important;
  }
  &:hover {
    text-decoration: none !important;
    font-style: normal !important;
    color: white;
    background-color: #222;
  }
`;

const Card = ({ title, category, date, slug, children, sizes, aspectRatio }) => (
  <Cards>
    {category === 'Quick Tips' ? (
      <CardWrapperFull to={slug}>
        <CardItem>
          <Meta>
            <p>{date}</p>
            <CategoryLink to={`/${_.kebabCase(category)}`}>{category}</CategoryLink>
          </Meta>
          <PostTitle to={slug}>{title}</PostTitle>
          <PostContent>{children}</PostContent>
        </CardItem>
      </CardWrapperFull>
    ) : (
      <CardWrapper to={slug}>
        <CardItem>
          <Meta>
            <p>{date}</p>
            <CategoryLink to={`/${_.kebabCase(category)}`}>{category}</CategoryLink>
          </Meta>
          <PostTitle to={slug}>{title}</PostTitle>
        </CardItem>
        <CoverImg key={slug} alt={title} sizes={sizes} aspectRatio={aspectRatio} />
      </CardWrapper>
    )}
  </Cards>
);

export { Card, CategoryLink };
