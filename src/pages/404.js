import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { Wrapper } from '../components/elements';
import { media } from '../utils/media';
import SEO from '../components/seo';

const FourOhFourWrapper = styled.div`
  padding: 3em 0;
  p {
    font-size: 1.125em;
  }
`;

const Four = styled.h1`
  font-size: 10em;
  margin-bottom: 64px !important;
`;

const FourTitle = styled.p`
  color: white;
  font-size: 3em !important;
  font-weight: bold;
  line-height: 0.9em;
  margin-bottom: 16px !important;
  @media ${media.s} {
    font-size: 3.5em !important;
  }
`;

const BG = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://media.giphy.com/media/BPfKqCTZhLI6A/giphy.gif');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  opacity: 0.15;
  pointer-events: none;
`;

const FourOhFour = () => (
  <Layout mode="night">
    <Helmet title="Page Not Found" postPath="https://www.jeffreyherrera.com/404" description="404! Looks like someone's lost." />
    <Wrapper>
      <BG />
      <FourOhFourWrapper>
        <Four>404!</Four>
        <FourTitle>Looks like someone's lost.</FourTitle>
        <p>
          That page doesn't exist! Check to see if it was a typo, or use the navigation to go to a page that hasn't been
          swallowed by the vortex.
        </p>
      </FourOhFourWrapper>
    </Wrapper>
  </Layout>
);

export default FourOhFour;
