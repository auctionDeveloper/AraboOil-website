import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
