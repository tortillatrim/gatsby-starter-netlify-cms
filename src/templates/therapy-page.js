import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import TherapistRoll from '../components/TherapistRoll'
import Testimonials from '../components/Testimonials'
import TherapyHero from '../components/TherapyHero'
import Map from '../components/Map'

export const TherapyPageTemplate = ({
  image,
  heading,
  subheading,
  stepHeader,
  step1Title,
  step1Text,
  step2Title,
  step2Text,
  step3Title,
  step3Text,
  step4Title,
  step4Text,
  testimonials,
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
        </div>
      </div>
    </div>

    <TherapyHero 
      stepHeader={stepHeader}
      step1Title={step1Title}
      step1Text={step1Text}
      step2Title={step2Title}
      step2Text={step2Text}
      step3Title={step3Title}
      step3Text={step3Text}
      step4Title={step4Title}
      step4Text={step4Text}
    ></TherapyHero>
   
    
    <section className="section container">
      <h2 className="title">Møt terapeutene</h2>
      <TherapistRoll />
      <div className="has-text-centered">
        <Link className="btn" to="/terapeuter">Til terapeuter</Link>
      </div>
    </section>

    <section className="has-background-info-light">
        <div className="section container">
          <h2 className="title">Du finner oss her</h2>
          <div className="columns is-tablet">
            <div className="column">
              <strong>Skjold Helsehus</strong>
              <div>Sætervegen 25</div>
              <div>5236 RÅDAL</div>

              <br />
              <a href="https://maps.google.com/maps?&amp;daddr=Sætervegen 25,5236,Rådal,NO Rådal NO" rel="noopener noreferrer" target="_blank" className="is-link button" aria-label="Få beskrivelser Sætervegen 25,5236,Rådal,NO" role="button">
                <i className="material-icons pr-3">directions</i>
                Åpne veibeskrivelse
              </a>
            </div>
            <div className="column">
              <Map></Map>
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

TherapyPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  testimonials: PropTypes.array,
}

const TherapyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TherapyPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        stepHeader={frontmatter.stepHeader}
        step1Title={frontmatter.step1Title}
        step1Text={frontmatter.step1Text}
        step2Title={frontmatter.step2Title}
        step2Text={frontmatter.step2Text}
        step3Title={frontmatter.step3Title}
        step3Text={frontmatter.step3Text}
        step4Title={frontmatter.step4Title}
        step4Text={frontmatter.step4Text}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

TherapyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TherapyPage

export const pageQuery = graphql`
  query TherapyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "therapy-page" } }) {
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
        stepHeader
        step1Title
        step1Text
        step2Title
        step2Text
        step3Title
        step3Text
        step4Title
        step4Text
        testimonials {
          author
          quote
        }
      }
    }
  }
`
