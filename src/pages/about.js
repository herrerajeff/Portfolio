import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { fontL, header, primary } from '../utils/theme';
import { Layout } from '../components/layout';
import { media } from '../utils/media';
import { Wrapper } from '../components/elements';
import SEO from '../components/seo';

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0 30px;
  padding: 3em 0;
  @media ${media.m} {
    padding: 8em 0;
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.div`
  @media ${media.m} {
    grid-column-end: span 2;
  }
  h1 {
    font-size: 3.4em;
    margin-bottom: 16px !important;
    @media ${media.m} {
      max-width: 50%;
      font-size: 4.8em;
    }
  }
`;

const MainText = styled.div`
  font-size: ${fontL};
  line-height: 1.5em;
`;

const Caption = styled.div`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.025em;
  margin-bottom: 2.5em;
  margin-top: 0;
`;

const Credentials = styled.div`
  margin-top: 3em;
  span {
    font-weight: 600;
  }
`;

const Icon = styled.i`
  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 4px;
    position: relative;
    top: 4px;
  }
`;

const About = () => (
  <Layout mode="night">
    <Helmet title="About" />
    <SEO postPath="https://www.jeffreyherrera.com/about" title="About" postSEO />
    <Wrapper>
      <AboutWrapper>
        <Title>
          <h1>Anything that can be changed, can be designed.</h1>
        </Title>
        <Caption>– Marty Neumeier</Caption>
        <MainText>
          <p>
            My interest in design is rooted in the intersection of form and narrative. Story separates design from
            decoration – adding intent and empathy to a project. It influences behavior and, as creators, we are
            responsible for translating the elements of an idea into something recognizable. The goal is, and will
            always be, to enrich the lives of the world around us, and make a positive impact through the design choices
            we make.
          </p>
          <p>Now, off to try and make my love for tacos sound that poetic.</p>
          <Credentials>
            <p>
              <span>Education &middot;</span> BFA Graphic Design, SUNY Purchase
            </p>
            <p>
              <span>Current &middot;</span> CUNY Bronx Community College
            </p>
            <p>
              <span> Listening to &middot;</span>{' '}
              <Icon>
                <svg viewBox="0 0 16.01 20.01">
                  <path
                    d="M12.51,13A3.51,3.51,0,1,0,16,17h0v-.35s0-.09,0-.13,0-.09,0-.14v-11a1,1,0,0,0-.56-.9L6.44.1A1,1,0,0,0,5,1V9.34A3.45,3.45,0,0,0,3.51,9,3.51,3.51,0,1,0,7,12.49H7V2.6L14,6v7.32A3.4,3.4,0,0,0,12.51,13ZM14,16.64a1.51,1.51,0,1,1,0-.27ZM3.51,14a1.51,1.51,0,1,1,0-3,1.51,1.51,0,0,1,0,3Z"
                    fill="#fcda00"
                  />
                </svg>
              </Icon>
              <a href="https://open.spotify.com/user/121523262/playlist/60aHzu4i3epYBVqvAX5wXC?si=zF_n10lVRT2qGllu0a1NjQ">
                August Playlist
              </a>{' '}
              &mdash; <Link to="/monthly-playlists/">View all Monthly Playlists</Link>
            </p>
            <br />
            <br />
            <Caption>This website is typeset in IBM Plex Sans &amp; IBM Plex Sans Condensed.</Caption>
          </Credentials>
        </MainText>
      </AboutWrapper>
    </Wrapper>
  </Layout>
);

export default About;
