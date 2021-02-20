import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import TherapyStep4Icon from '../components/TherapyStep4Icon'
import TherapyStep2Icon from '../components/TherapyStep2Icon'
import subImg from '../img/sub-hero.jpeg'

export const IndexPageTemplate = ({
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
        position: 'absolute'
      }}
    >
      </div>
      <section className="section container">
        <div className=" has-text-white">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen mt-5">
            {heading}
          </h1>
          <div className="py-4">
            <Link to="/about" className="button is-white is-medium is-outlined mr-4">Les mer</Link>
            <Link to="/contact" className="button is-white is-medium is-outlined mr-4">Kontakt</Link>
            </div>
        </div>
      
        <div className="columns is-variable is-8 mt-6">
          <div className="column is-half-tablet is-one-quarter-desktop mb-5">
            <Link  to="/eq-terapi">
              <div className="main-action-card has-text-centered p-4 content">
                <TherapyStep4Icon></TherapyStep4Icon>
                <h4 className="is-size-5 mt-1 has-text-weight-semibold">EQ-Terapi</h4>
                <p>Vi gir EQ-Terapi. bla bla bla </p>
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
                <TherapyStep2Icon></TherapyStep2Icon>
                <h4 className="is-size-5 mt-1 has-text-weight-semibold">Kurs og kompetanse</h4>
                <p>Vi har nettkurs og holder foredrag. bla bla bla </p>
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

        <section className="section container">
          <div className="columns">
          <div className="column">
            <img src={subImg} />
          </div>
          <div className="column content">
            <h3 className="has-text-primary mb-0 is-size-5 has-text-weight-bold">Hvorfor er vi til?</h3>
            <h2 className="title mb-6">Vi brenner for at mennesker skal føle seg god nok, våge å vise hvem de er og leve sitt liv.</h2>
            <div className="">
              <p>Gjennom erfaring fra barnehagen og EQ terapi utdanningen ser vi hvor utrolig viktig det er at foreldre og mennesker som jobber med barn har god relasjonskompetanse. Hvordan vi som voksne møter barn påvirker barns selvfølelse og hvordan de ser på seg selv. Dette synet på seg selv kan de bære med seg hele livet.</p>
              <p>For at barn skal utvikle god psykisk helse er det viktig at de opplever gode møter med voksne i barndommen. Som voksen er det ikke alltid like lett å møte barn på en god nok måte, fordi gamle reaksjonsmønstre fra egen barndom kan overta. Vi ønsker å hjelpe barn og voksne slik at de kan håndtere følelsene sine på en hensiktsmessig måte.</p>
              <p> Det er en viktig sammenheng mellom det å ha gode og nære relasjoner i livet sitt og det å kunne håndtere følelser. Vi ønsker å hjelpe foreldre og barn til å føle seg god nok.</p>
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
