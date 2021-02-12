import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './dependencies.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="no" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="kgxU_0DDqFPPP-I63gcnOZRwUQcGsx0764tAnpuUPso" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        
        <meta name="theme-color" content="#738150" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "url": "https://terapi.hjertekroll.no",
              "image" : "https://terapi.hjertekroll.no/img/og-image.png",
              "name": "Hjertekrøll - EQ Terapi",
              "telephone": "95137906",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sætervegen 25",
                "addressLocality": "Rådal",
                "addressRegion": "Bergen",
                "postalCode": "5236",
                "addressCountry": "Norway"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 60.30069163013214,
                "longitude": 5.339820340965894
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <div style={{minHeight: '70vh'}}>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
