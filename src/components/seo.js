import React from 'react';
import Helmet from 'react-helmet';
import config from '../utils/config';

const SEO = props => {
  const {postPath, title, description, image} = props;
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
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {postPath ? (<meta property="og:url" content={postPath}/>):(<meta property="og:url" content={config.siteUrl}/>)};
      <meta property="og:type" content="website" />
      {title ? (<meta property="og:title" content={title} />):(<meta property="og:title" content={config.siteTitle} />)};
      {description ? (<meta property="og:description" content={description} />):(<meta property="og:description" content={config.siteDescription} />)};
      {image ? (<meta property="og:image" content={image} />):(<meta property="og:image" content={config.siteUrl + config.siteBanner} />)}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        {title ? (<meta name="twitter:title" content={title} />):(<meta name="twitter:title" content={config.siteTitle} />)};
        {description ? (<meta name="twitter:description" content={description} />):(<meta name="twitter:description" content={config.siteDescription} />)};
        {image ? (<meta name="twitter:image" content={image} />):(<meta name="twitter:image" content={config.siteUrl + config.siteBanner} />)};
    </Helmet>
  );
};

export default SEO;