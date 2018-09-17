import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { media } from '../utils/media';
import { Wrapper } from './elements';
import { text, header, footer, footerGlow, soft } from '../utils/theme';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 1.5em;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  margin-bottom: 65px;
  @media ${media.s} {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
  p {
    color: ${text};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.03em;
    margin: 0;
  }
  a {
    color: ${header};
    background-color: ${footer};
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.03rem;
    padding: 8px 16px;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 3px;
    transition: all 0.25s ease;
    border-bottom: none;
    &:hover {
      border-bottom: none;
      background-color: ${header};
      color: ${footer};
      box-shadow: 0px 3px 6px ${footerGlow};
    }
  }
`;

const FooterContact = styled.div`
  border-top: solid 1px ${soft};
  border-bottom: solid 1px ${soft};
  a {
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(7, auto);
    justify-content: space-between;
    width: 100%;
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.5em;
    color: ${header};
    text-decoration: none;
    transition: all 0.25s ease;
    position: relative;
    &:hover {
      font-style: oblique;
      text-decoration: line-through;
    }
  }
`;

const Footer = ({ isProject = false, prev, next, projectTheme }) => (
  <Wrapper>
    <FooterContact>
      <a href="mailto:herrera.jeffrey@gmail.com">
        <span>herrera</span>
        <span>&middot;</span>
        <span>jeffrey</span>
        <span>(at)</span>
        <span>gmail</span>
        <span>&middot;</span>
        <span>com</span>
      </a>
    </FooterContact>
    <FooterWrapper>
      <div>
        <p>2018 © Jeffrey Herrera. All rights reserved.</p>
      </div>
      <a href="mailto:herrera.jeffrey@gmail.com?subject=Let's Work!">
        IF YOU LIKE IT, PUT A &nbsp;
        <span role="img" aria-label="Engagement Ring">
          💍
        </span>&nbsp; ON IT.
      </a>
    </FooterWrapper>
  </Wrapper>
);

export default Footer;
