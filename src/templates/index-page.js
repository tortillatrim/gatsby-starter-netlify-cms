import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import IconHeart from '../components/icons/IconHeart'
import IconOnlineCourse from '../components/icons/IconOnlineCourse'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  therapydescription,
  educationdescription,
  whyimage,
  whyheading,
  whysubheading,
  whoimage,
  whoheading,
  whosubheading,
  whotext,
  content, contentComponent
}) => {
  const PageContent = contentComponent || Content
  return <div>
    <div
      className="full-width-image large margin-top-0 is-flex is-align-items-center"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
      }}
    >
       <div className="section container has-text-white">
          {/* <img src={logo} alt="Hjertekrøll" width="150" height="150" className="is-hidden-mobile"/> */}
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen mt-5">
            {heading}
          </h1>
          {subheading.length > 0 && 
            <p className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              lineHeight: '1.3',
            }}>
            {subheading}
            </p> 
          }
          <div className="py-5">
            <Link to="/about" className="button is-white is-medium is-outlined mr-4">Les mer</Link>
            <Link to="/contact" className="button is-white is-medium is-outlined mr-4">Kontakt</Link>
            </div>
        </div>
      </div>
      <section className="section container pt-0" style={{marginTop: '-100px'}}>
        <div className="columns is-variable is-8">
          <div className="column is-half-tablet is-one-quarter-desktop mb-5">
            <Link  to="/eq-terapi">
              <div className="main-action-card has-text-centered p-4 content">
                <IconHeart size="56" />
                <h4 className="is-size-5 mt-1 has-text-weight-semibold">EQ-Terapi</h4>
                <p>{therapydescription}</p>
                <div className="action-icon">
                  <div className="action-icon-inner">
                  <i className="material-icons">arrow_forward</i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="column is-half-tablet is-one-quarter-desktop mb-5">
            <Link  to="/kompetanse">
              <div className="main-action-card has-text-centered p-4 content">
                <IconOnlineCourse size="56"/>
                <h4 className="is-size-5 mt-1 has-text-weight-semibold">Nettkurs</h4>
                <p>{educationdescription}</p>
                <div className="action-icon">
                  <div className="action-icon-inner">
                  <i className="material-icons">arrow_forward</i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        </section>

        <section className="section container" id="why">
          <div className="columns is-variable is-8">
          <div className="column">
            <div className="shadowed-img">
            <PreviewCompatibleImage
              imageInfo={{
                image: whyimage,
                alt: `Image for hero section`,
              }}
            />
          </div>
          </div>
          <div className="column content">
            <h3 className="has-text-primary mb-0 is-size-5 has-text-weight-bold">{whyheading}</h3>
            <h2 className="title mb-6">{whysubheading}</h2>
            <PageContent className="content" content={content} />
            </div>
          </div>
        </section>

        <section className="section container" id="who">
          <div className="columns is-variable is-8">
          <div className="column content">
            <h3 className="has-text-primary mb-0 is-size-5 has-text-weight-bold">{whoheading}</h3>
            <h2 className="title mb-6">{whosubheading}</h2>
            <HTMLContent className="content" content={whotext} />
          </div>
          <div className="column">
            <div className="shadowed-img-right">
              <PreviewCompatibleImage
                imageInfo={{
                  image: whoimage,
                  alt: `Image for who section`,
                }}
              />
            </div>
            <div className="shadowed-img-right">
              <PreviewCompatibleImage
                imageInfo={{
                  image: whoimage,
                  alt: `Image for who section`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    
  </div>
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: index } = data

  return (
    <Layout navbarClass="hero-image">
      <IndexPageTemplate
        image={index.frontmatter.image}
        heading={index.frontmatter.heading}
        subheading={index.frontmatter.subheading}
        therapydescription={index.frontmatter.therapydescription}
        educationdescription={index.frontmatter.educationdescription}
        whyimage={index.frontmatter.whyimage}
        whyheading={index.frontmatter.whyheading}
        whysubheading={index.frontmatter.whysubheading}
        whoimage={index.frontmatter.whoimage}
        whoheading={index.frontmatter.whoheading}
        whosubheading={index.frontmatter.whosubheading}
        whotext={index.frontmatter.whotext.childMarkdownRemark.html}
        contentComponent={HTMLContent}
        content={index.html}
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
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90, duotone: { highlight: "#000000", shadow: "#000000", opacity: 40 }) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        therapydescription
        educationdescription
        whyimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whyheading
        whysubheading
        whoimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whoheading
        whosubheading
        whotext {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
