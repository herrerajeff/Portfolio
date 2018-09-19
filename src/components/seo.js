import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../utils/config';

const SEO = props => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  return (
    <Helmet titleTemplate="%s · Jeffrey Herrera" defaultTitle="Jeffrey Herrera">
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={config.siteDescription} />
      <meta name="image" content={config.siteUrl + config.siteBanner} />
      <title>{config.siteTitle}</title>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:url" content={config.siteUrl} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:description" content={config.siteDescription} />
      <meta property="og:image" content={config.siteUrl + config.siteBanner} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={config.siteTitle} />
        <meta name="twitter:description" content={config.siteDescription} />
        <meta name="twitter:image" content={config.siteUrl + config.siteBanner} />
    </Helmet>
  );
};

export default SEO;