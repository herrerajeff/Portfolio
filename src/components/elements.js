import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const LargeH1 = styled.h1`
  margin-bottom: 16px !important;
  font-size: 3.5em;
  @media ${media.s} {
    font-size: 4.8em;
  }
`;

const WrapperStyle = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  @media ${media.s} {
    max-width: 1350px;
  }
  @media ${media.m} {
    max-width: 1390px;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media ${media.l} {
    max-width: 1430px;
    padding-left: 70px;
    padding-right: 70px;
  }
`;

const TextWrapper = styled.div`
  font-size: 1.25em;
  @media ${media.m} {
    width: 50%;
  }
`;

const BlogListWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 3em 0;
  @media ${media.m} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${media.l} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LargeTitle = ({ children }) => <LargeH1>{children}</LargeH1>;
const Wrapper = ({ children }) => <WrapperStyle>{children}</WrapperStyle>;
const Text = ({ children }) => <TextWrapper>{children}</TextWrapper>;
const BlogList = ({ children }) => <BlogListWrapper>{children}</BlogListWrapper>;

export { LargeTitle, Wrapper, Text, BlogList };
