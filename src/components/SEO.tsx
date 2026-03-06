import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

const SEO = ({
  title = "Building Materials Supplier in Jeddah | Al Emaar Al Areeq Trading Est.",
  description = "Leading building materials supplier in Jeddah. We supply construction materials, epoxy flooring, waterproofing, industrial paints, power tools, plumbing & electrical materials. Authorized dealer for Sika, Jotun, Bosch, Makita, Weber, DCP.",
  keywords = "building materials supplier in Jeddah, construction materials shop Jeddah, epoxy supplier Jeddah, waterproofing materials Jeddah, industrial paint supplier Jeddah, power tools supplier Jeddah, plumbing materials supplier Jeddah, electrical materials supplier Jeddah, tile adhesive supplier Jeddah, gypsum board supplier Jeddah, مورد مواد بناء جدة, محل مواد بناء جدة",
  canonical = "https://alemaaralareq.com/",
  ogImage = "https://alemaaralareq.com/src/assets/logo.png",
  ogType = "website",
  schema
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
