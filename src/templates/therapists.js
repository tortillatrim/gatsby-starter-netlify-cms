import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Workdays from '../components/Workdays'
import BookingForm from '../components/BookingForm'

export const TerapeutTemplate = ({
  content,
  contentComponent,
  image,
  description,
  name,
  tel,
  email,
  workdays,
  helmet,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      {helmet || ''}
    <div
      style={{
        width: '100%',
        position: 'absolute',
        height: '400px',
        backgroundColor: '#394029',
        zIndex: '-1'
      }}
    ></div>
    <section className="container">
      <div className="columns is-tablet is-gapless column-mob-inline">
        <div className="column is-one-third-tablet">
          <div className="px-4">
            <div className="therapist-main-card content">
              <PreviewCompatibleImage
                          imageInfo={{
                            image: image,
                            alt: `featured image thumbnail for therapist ${name}`,
                          }}
                        />
              <div className="p-5">
              <h2>{name}</h2>
              <span className="tag is-normal">EQ Terapeut</span>
              <p className="py-3">{description}</p>
              
              <button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth'})} className="is-hidden-tablet button is-primary is-medium"><i className="material-icons pr-3">book_online</i> Bestill time</button>
              </div>
            </div>
            <article className="message is-info mt-6">
              <p className="message-header">
                Kontakt
                <i className="material-icons">phone</i>
              </p>
              <div className="message-body">
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">phone</i><a href={"tel:" + tel}>{tel}</a>
                </div>
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">email</i><a href={"mailto: " + email}>{email}</a>
                </div>
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">place</i><a href="https://maps.google.com/maps?&amp;q=Sætervegen 25,5236,Rådal,NO Rådal NO" rel="noopener noreferrer" target="_blank" aria-label="Sætervegen 25,5236,Rådal,NO">Skjold Helsehus</a>
                </div>
              </div>
            </article>

            <article className="message my-6">
              <p className="message-header">
                Arbeidstid
                <i className="material-icons">schedule</i>
              </p>
              <div className="message-body">
                <Workdays workdays={workdays} />
              </div>
            </article>

          </div>
        </div>
        <div className="column is-two-third-tablet">
          <div className="therapist-main-action section is-hidden-mobile">
            <button onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth'})} className="button cta-button is-large"><i className="material-icons pr-3">book_online</i> Bestill time</button>
          </div>
          
          <div className="section">
            <h2 className="title">Om terapeuten</h2>
            <PageContent className="content" content={content} />
          </div>

          <br/>
          <section className="hero has-background-info-light">
            <div className="hero-body">
              <div className="container px-5">
                <h2 className="title" id="contact">Kontakt meg</h2>
                <p>Send meg en melding eller ta kontakt direkte for å avtale en time</p>
                <br/>
                <BookingForm />
              </div>
            </div>
          </section>
          <br/>
          
        </div>
      </div>
    </section>
    </div>
  )
}

TerapeutTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  name: PropTypes.string,
  tel: PropTypes.number,
  email: PropTypes.string,
  workdays: PropTypes.array,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
}

const Terapeut = ({ data }) => {
  const { markdownRemark: terapeut } = data

  return (
    <Layout>
      <TerapeutTemplate
        content={terapeut.html}
        contentComponent={HTMLContent}
        description={terapeut.frontmatter.description}
        image={terapeut.frontmatter.image}
        helmet={
          <Helmet titleTemplate="%s | EQ Terapeut">
            <title>{`${terapeut.frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${terapeut.frontmatter.description}`}
            />
          </Helmet>
        }
        name={terapeut.frontmatter.name}
        tel={terapeut.frontmatter.tel}
        email={terapeut.frontmatter.email}
        workdays={terapeut.frontmatter.workdays}
      />
    </Layout>
  )
}

export default Terapeut

export const pageQuery = graphql`
  query TerapeutByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tel
        email
        workdays {
          days
          hours
        }
      }
    }
  }
`
