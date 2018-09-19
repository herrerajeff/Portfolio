import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { text, soft } from '../utils/theme';
import { Layout } from '../components/layout';
import { media } from '../utils/media';
import { Wrapper } from '../components/elements';
import SEO from '../components/seo';

const StartupWrapper = styled.div`
  display: grid;
  margin: 3em 0;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  @media ${media.s} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${media.m} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StartupList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    font-size: 12px;
    letter-spacing: 0.05em;
    font-weight: 500;
    padding: 0.5em 0.75em;
    color: ${text};
    &:hover {
      box-shadow: 0 3px 20px -3px hsla(250, 60%, 30%, 25%);
      position: relative;
      text-decoration: none !important;
      font-style: normal !important;
    }
  }
  img {
    margin-right: 8px;
  }
`;

const StartupTitle = styled.div`
  margin-bottom: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  border-radius: 3px;
  h1 {
    color: black;
    @media ${media.s} {
      padding: 0.5em auto 1em;
      font-size: 5em !important;
    }
  }
`;

const StartupGoals = styled.div`
  text-align: center;
  color: #222;
  margin-bottom: 6em;
  border-radius: 3px;
  p {
    margin-bottom: 0 !important;
    @media ${media.s} {
      font-size: 2.5em;
    }
    line-height: 1.5em;
    font-size: 2em;
    span {
      display: block;
      @media ${media.s} {
        display: inline;
      }
      &:first-of-type {
        color: #006f95;
      }
      &:nth-of-type(2) {
        color: #e1aa38;
      }
      &:nth-of-type(3) {
        color: #e6444a;
      }
    }
  }
`;

const MainLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  margin-top: 3em;
  @media ${media.s} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${media.m} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  a {
    padding: 1em;
    border: 1px solid ${soft};
    display: flex;
    justify-content: space-between;
    &:hover {
      text-decoration: none;
      font-style: normal;
      background-color: white;
      border: 1px solid white;
    }
  }
`;

const StartupLink = props => (
  <li>
    <a href={props.to} target="_blank" rel="noopener noreferrer">
      <img src={`https://www.google.com/s2/favicons?domain_url=${props.to}`} alt="favicon" />
      {props.children}
    </a>
  </li>
);

const Startup = () => (
  <Layout>
    <Helmet title="Casa" />
    <SEO postPath='https://www.jeffreyherrera.com/casa' title="Casa" postSEO />
    <Wrapper>
      <MainLinks>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.notion.so/jeffreyherrera/Storg-Capital-0dd4373383f64328bf3f2fb1156a7bed"
        >
          <span>Storgē Capital</span>
          <span>↗</span>
        </a>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.notion.so/jeffreyherrera/498c372e6a664a34872c9d7350827de1?v=eb1ce1a5db8c4f09b06abe2e1b7189ff"
        >
          <span>BCC Tasks</span>
          <span>↗</span>
        </a>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.notion.so/jeffreyherrera/04f3a94128844894ad4f7216279d4db7?v=4ea227d9e1eb4e0fb9ed967fd5e12006"
        >
          <span>Job Search</span>
          <span>↗</span>
        </a>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.notion.so/jeffreyherrera/Reading-List-8afc7c723d124f68ba5c82246b558921"
        >
          <span>Reading List</span>
          <span>↗</span>
        </a>
      </MainLinks>
    </Wrapper>
    <Wrapper>
      <StartupWrapper>
        <StartupList>
          <h4>Design</h4>
          <StartupLink to="http://www.underconsideration.com/brandnew/">Brand New</StartupLink>
          <StartupLink to="http://www.thedieline.com/">The Dieline</StartupLink>
          <StartupLink to="http://siteinspire.com/">Site Inspire</StartupLink>
          <StartupLink to="https://httpster.net/">Httpster</StartupLink>
          <StartupLink to="http://www.css-tricks.com/">CSS-Tricks</StartupLink>
          <StartupLink to="https://frontendfront.com/">Front End Front</StartupLink>
          <StartupLink to="http://khroma.co/generator/">Khroma</StartupLink>
        </StartupList>
        <StartupList>
          <h4>Misc</h4>
          <StartupLink to="https://www.youtube.com/feed/subscriptions">YouTube</StartupLink>
          <StartupLink to="https://www.twitch.tv/directory/following">Twitch</StartupLink>
          <StartupLink to="https://mobile.twitter.com/">Twitter</StartupLink>
          <StartupLink to="https://smile.amazon.com/">Amazon</StartupLink>
          <StartupLink to="https://thewatchseries.us/new-release">TV &amp; Movies</StartupLink>
          <StartupLink to="http://www.seamless.com/">Seamless</StartupLink>
          <StartupLink to="http://www.netflix.com/">Netflix</StartupLink>
          <StartupLink to="http://raindrop.io/">Raindrop</StartupLink>
        </StartupList>
        <StartupList>
          <h4>Dev</h4>
          <StartupLink to="https://www.toptal.com/designers/htmlarrows/">HTML Arrows</StartupLink>
          <StartupLink to="https://jakearchibald.github.io/svgomg/">SVG</StartupLink>
          <StartupLink to="http://www.modularscale.com/">Modular Scale</StartupLink>
          <StartupLink to="https://everypixel.com/">Every Pixel</StartupLink>
          <StartupLink to="http://pngimg.com/">PNG Img</StartupLink>
          <StartupLink to="https://brandcolors.net/">Brand Colors</StartupLink>
          <StartupLink to="https://www.pttrns.com/">Pttrns</StartupLink>
        </StartupList>
      </StartupWrapper>
    </Wrapper>
  </Layout>
);

export default Startup;
