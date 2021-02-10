import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import TherapistRoll from '../components/TherapistRoll'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  testimonials,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top center`,
        backgroundAttachment: `fixed`,
        color: '#fff'
      }}
    >
      <div
        className="px-2"
        style={{
          maxWidth: '900px',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        >
          {heading}
        </h1>
        <p
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            lineHeight: '1.3',
          }}
        >
          {subheading}
        </p>
        <div className="py-5">
          <Link to="/bestill-time" className="button cta-button is-medium mr-4"><i className="material-icons pr-3">book_online</i> Bestill time</Link>
          <Link to="/about" className="button is-white is-medium is-outlined mr-4">Om oss</Link>
        </div>
      </div>
    </div>

    <section className="section container">
      <h2 className="title">Møt terapeutene</h2>
      <TherapistRoll />
      <div className="has-text-centered">
        <Link className="btn" to="/terapeuter">Til terapeuter</Link>
      </div>
    </section>

    <section className="hero has-background-info-light">
      <div className="hero-body">

        <div className="container px-5">
          <h2 className="title">Du finner oss her</h2>
          <div className="columns is-tablet">
            <div className="column">
              <strong>SKJOLD HELSEHUS</strong>
              <div>SÆTERVEGEN 25</div>
              <div>5236 RÅDAL</div>

              <br />
              <a href="https://maps.google.com/maps?&amp;daddr=Sætervegen 25,5236,Rådal,NO Rådal NO" rel="noopener noreferrer" target="_blank" className="is-link button" aria-label="Få beskrivelser Sætervegen 25,5236,Rådal,NO" role="button">
                Finn reisemåte
                <i className="material-icons pl-3">directions</i>
              </a>
            </div>
            <div className="column">
              <Map></Map>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section container content">
      <h2 className="title">Tilbakemeldinger</h2>
      <Testimonials testimonials={testimonials} />
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  testimonials: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        testimonials {
          author
          quote
        }
      }
    }
  }
`
