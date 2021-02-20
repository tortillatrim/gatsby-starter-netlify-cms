import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import CourseRoll from '../components/CourseRoll'

export const EducationPageTemplate = ({
  image,
  heading,
  subheading,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top center`,
        color: '#fff'
      }}
    >
     <div className="section container">
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen mt-5">
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
      </div>
    </div>

    <section className="section container">
      <h2 className="title">Våre nettkurs</h2>
      <CourseRoll />
      <div className="has-text-centered">
        <Link className="btn" to="kurs">Til kurs</Link>
      </div>
    </section>
  </div>
)

EducationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const EducationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <EducationPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

EducationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default EducationPage

export const pageQuery = graphql`
  query EducationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "education-page" } }) {
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
