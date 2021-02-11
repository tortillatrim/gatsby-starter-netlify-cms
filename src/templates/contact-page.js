import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import QAs from '../components/QAs'
import Content, { HTMLContent } from '../components/Content'

function handleClickQA(e) {
  e.preventDefault();
  document.querySelector('#qa').scrollIntoView({ behavior: 'smooth'});
}

export const ContactPageTemplate = ({ title, qaDescription, content, contentComponent, qas }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet title="Kontakt | Hjertekrøll" />
      <section className="section">
        <div className="container content">
          <h1>
            {title}
          </h1>
          <PageContent className="content" content={content} />
          <p>Sjekk <a href="#qa" onClick={handleClickQA}>spørsmål og svar</a> før du henvender deg. Kanskje har noen lurt på det samme som deg?</p>
        </div>
      </section>
      <section className="has-background-white-ter">
        <div className="section">
        <div className="container content">
          <div className="columns">
            <div className="column">
              <ContactForm></ContactForm>
            </div>
            <div className="column">
              <div className="box">
                <h3>Kontakt informasjon</h3>
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">phone</i>95137906
                </div>
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">email</i><a>post@hjertekroll.no</a>
                </div>
                <div className="is-flex pt-3">
                  <i className="material-icons mr-3">place</i>Skjold Helsehus - Sætervegen 25, 5236 Rådal
                </div>
              </div>
            </div>
          </div>

          <br />
          <h2 id="qa">Spørsmål og svar</h2>
          <p>{qaDescription}</p>
          <br />
          <QAs qas={qas} />
        </div>
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  qaDescription: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  qas: PropTypes.array,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: contact } = data

  return (
    <Layout>
      <ContactPageTemplate
        title={contact.frontmatter.title}
        qaDescription={contact.frontmatter.qaDescription}
        contentComponent={HTMLContent}
        content={contact.html}
        qas={contact.frontmatter.qas}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        qaDescription,
        qas {
          question
          answer
        }
      }
    }
  }
`
