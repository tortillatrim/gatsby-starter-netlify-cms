import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import TherapistRoll from '../components/TherapistRoll'
import Testimonials from '../components/Testimonials'

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
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
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
          <Link to="/terapeuter" className="button is-primary is-medium mr-4">Bestill time <span className="material-icons pl-2">book_online</span></Link>
          <Link to="/about" className="button is-white is-medium is-outlined mr-4">Om oss</Link>
        </div>
      </div>
        
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h2 className="title">Møt terapeutene</h2>
                  <TherapistRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/terapeuter">
                    Til terapeuter
                    </Link>
                  </div>
                </div>

                <h3 className="title">Tilbakemeldinger</h3>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
      </div>
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
