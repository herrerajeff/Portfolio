import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../utils/config';

const SEO = props => {
  return (
    <Helmet titleTemplate="%s · Jeffrey Herrera" defaultTitle="Jeffrey Herrera">
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
      <meta
        name="keywords"
        content="graphic, design, portfolio, jeffrey, herrera, jeff, graphics, designer, minimalism, bold, typography, motion, web, development, product"
      />
      <meta name="image" content={config.siteUrl + realPrefix + config.siteBanner} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={config.siteUrl + realPrefix + config.siteBanner} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={config.siteTitle} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={config.siteDescription} />
      <meta name="twitter:image" content={config.siteUrl + realPrefix + config.siteBanner} />
      <meta name="apple-mobile-web-app-title" content="jeffreyherrera.com" />
      <meta name="application-name" content="jeffreyherrera.com" />
      <meta name="theme-color" content="#fcda00" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fcda00" />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  postSEO: PropTypes.bool,
};