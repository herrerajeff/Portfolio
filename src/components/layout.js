import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { primary, bg, text, header } from '../utils/theme';
import { media } from '../utils/media';
import { Wrapper } from './elements';
import Pagination from './pagination';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    background: #f2f5f7;
  }
  body{
    min-height: 100%;
    height: 100vh;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }
  * {
    box-sizing: border-box;
    &::selection {
      color: ${header};
      background: ${primary};
    }
  }
}
`;

const Site = styled.div`
  min-height: 100vh;
  background: ${bg};
  color: ${text};
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  @media ${media.phone} {
    font-size: 14px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${header};
    margin-top: 0;
    margin-bottom: 0.625em;
    line-height: 0.9em;
    text-transform: uppercase;
  }
`;

const Main = styled.div`
  line-height: 1.5em;
  margin: 0;
  margin-bottom: 3em;
  p {
    margin-bottom: 1.45em;
  }
  a {
    color: ${header};
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s ease;
    display: inline-block;
    position: relative;
    @media ${media.s} {
      &:hover {
        text-decoration: line-through;
        font-style: oblique;
      }
    }
  }
`;

// Projects
const WorkHeader = styled.div.attrs({
  background: props => props.background || 'yellow',
})`
  width: 100%;
  color: ${text};
  background-color: ${props => props.background};
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  h1 {
    color: ${header};
    margin-bottom: 16px;
    font-size: 3.25em;
  }
  p {
    color: ${text};
  }
  hr {
    background-color: ${text};
    opacity: 0.25;
    width: 2em;
    height: 2px;
  }
`;

const WorkData = styled.div`
  align-items: center;
  margin: 9em 0;
  position: relative;
`;

const WorkAreas = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 500;
  letter-spacing: 0.03em;
  opacity: 0.5;
`;

const WorkDescription = styled.p`
  font-size: 1.125em;
  @media ${media.l} {
    max-width: 50%;
  }
  @media ${media.s} {
    font-size: 1.25em;
  }
  strong {
    font-weight: 400;
  }
`;

const AreaItem = styled.span`
  &:not(:last-child) {
    margin-right: 0.25em;
    &:after {
      content: ',';
    }
  }
`;

const Layout = ({
  isProject = false,
  children,
  mode = 'day',
  projectTheme,
  projectTitle,
  projectColor,
  projectDescription,
  projectAreas,
  prev,
  next,
  location,
  postPath,
  title,
  description,
  image
}) => (
  <div>
    <Helmet titleTemplate="%s · Jeffrey Herrera" defaultTitle="Jeffrey Herrera">
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={config.siteDescription} />
      <meta name="image" content={config.siteUrl + config.siteBanner} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {postPath ? (<meta property="og:url" content={postPath}/>):(<meta property="og:url" content={config.siteUrl}/>)};
      <meta property="og:type" content="website" />
      {title ? (<meta property="og:title" content={title} />):(<meta property="og:title" content={config.siteTitle} />)};
      {description ? (<meta property="og:description" content={description} />):(<meta property="og:description" content={config.siteDescription} />)};
      {image ? (<meta property="og:image" content={image} />):(<meta property="og:image" content={config.siteUrl + config.siteBanner} />)}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ""}
      />
      {title ? (<meta name="twitter:title" content={title} />):(<meta name="twitter:title" content={config.siteTitle} />)};
      {description ? (<meta name="twitter:description" content={description} />):(<meta name="twitter:description" content={config.siteDescription} />)};
      {image ? (<meta name="twitter:image" content={image} />):(<meta name="twitter:image" content={config.siteUrl + config.siteBanner} />)};
  </Helmet>
  <ThemeProvider theme={{ mode }}>
    {!isProject ? (
      <Site>
        <GlobalStyle />
        <Header location={location} />
        <Main>{children}</Main>
        <Footer />
      </Site>
    ) : (
      <Site>
        <GlobalStyle />
        <ThemeProvider theme={projectTheme}>
          <WorkHeader background={projectColor}>
            <Header location={location} />
            <Wrapper>
              <WorkData>
                <h1>{projectTitle}</h1>
                <WorkDescription dangerouslySetInnerHTML={{ __html: projectDescription }} />
                <hr />
                <WorkAreas>{projectAreas.map(area => <AreaItem key={area}>{area}</AreaItem>)}</WorkAreas>
              </WorkData>
            </Wrapper>
          </WorkHeader>
        </ThemeProvider>
        <Main>{children}</Main>
        <ThemeProvider theme={projectTheme}>
          <Pagination next={next} prev={prev} />
        </ThemeProvider>
        <Footer />
      </Site>
    )}
  </ThemeProvider>
  </div>
);

export { Layout, Site, Wrapper, Main };
