import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import TherapistRoll from '../components/TherapistRoll'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map'
import TherapyStep1Icon from '../components/TherapyStep1Icon'
import TherapyStep2Icon from '../components/TherapyStep2Icon'
import TherapyStep3Icon from '../components/TherapyStep3Icon'
import TherapyStep4Icon from '../components/TherapyStep4Icon'

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
          <Link to="/bestill-time" className="button cta-button is-medium mr-4"><i className="material-icons pr-3">book_online</i> Bestill time</Link>
          <Link to="/about" className="button is-white is-medium is-outlined mr-4">Om oss</Link>
        </div>
      </div>
    </div>

    <section className="section container">
        <h3 className="has-text-primary mb-0 is-size-5 has-text-weight-bold">Hva er EQ-terapi?</h3>
        <h2 className="title mb-6">Identifisere og anerkjenne følelsene dine</h2>

        <div className="columns is-multiline">
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep1Icon></TherapyStep1Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">Identifiser</h4>
            <p>EQ-terapi er en terapiform der EQ-terapeuten hjelper deg til å identifisere og anerkjenne følelsene dine. Som EQ-terapeut har jeg et ikke-dømmende menneskesyn, og jeg møter deg akkurat der du er. I denne formen for terapi lukker du øynene, og møter deg selv på dine følelser her og nå.</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep2Icon></TherapyStep2Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">Anerkjenne</h4>
            <p>Gjennom å identifisere opplevelsen du har i kroppen under en EQ-terapi, er det mitt ansvar å støtte og veilede deg slik at du kan finne tilbake til hvilken hendelse og opplevelse som satte sine spor hos deg som barn, ungdom eller voksen. I denne prosessen vil du oppleve at du får bearbeidet såre erfaringer og traumer som kroppen fortsatt husker, selv om hodet ikke gjør det.</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep3Icon></TherapyStep3Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">Bearbeide</h4>
            <p>Noen ganger kan situasjoner som ikke opplevdes som traumatiske der og da, ha satt dype spor likevel og påvirket hvordan du idag ser deg selv og andre som voksen. Bearbeiding av disse opplevelsene skjer ved å gå inn og snakke med deg selv, og etter hvert foreldrene dine eller andre som har vært betydningsfulle i din barndom. Dette vil gjøre at du vil oppleve mer glede i hverdagen, og energi og rom til å skape deg mer plass til å leve her og nå.</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep4Icon></TherapyStep4Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">Bli glad i deg selv</h4>
            <p>Gjennom å ta vare på ditt indre barn, fyller du på din egen tank for egenkjærlighet fordi du lærer å bli glad i deg selv og se at du er akkurat god nok! Du blir din egen beste venn – nummer én i ditt liv – og akkurat slik bygger du opp igjen din egen selvfølelse.
                Du har nå startet din egen personlige reise fra hodet til hjertet.</p>
          </div>
        </div>
        
        
    </section>

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
              <strong>SKJOLD HELSEHUS</strong>
              <div>SÆTERVEGEN 25</div>
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
            fluid(maxWidth: 2048, quality: 90, duotone: { highlight: "#000000", shadow: "#000000", opacity: 45 }) {
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
