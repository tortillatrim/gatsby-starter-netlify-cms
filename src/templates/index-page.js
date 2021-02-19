import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
}) => (
  <div>
    <div
      className="full-width-image large margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top center`,
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
          <Link to="/about" className="button is-white is-medium is-outlined mr-4">Om oss</Link>
        </div>
      </div>
    </div>
    <section className="section container">
    <div className="columns">
      <div className="column">
        First column
      </div>
      <div className="column">
        Second column
      </div>
    </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
            fluid(maxWidth: 2048, quality: 90, duotone: { highlight: "#000000", shadow: "#000000", opacity: 45 }) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
