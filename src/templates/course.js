import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const CourseTemplate = ({
  content,
  contentComponent,
  image,
  description,
  name,
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
                  <p className="py-3">{description}</p>
                  <a className="is-hidden-tablet button is-primary is-medium" href="https://hjertekroll.simplero.com/page/157257"><i className="material-icons pr-3">shop</i> Meld deg på</a>
                </div>
              </div>

              <article className="message my-6">
                <p className="message-header">
                  Annen informasjon
                  <i className="material-icons">info</i>
                </p>
                <div className="message-body">
                <table className="table is-fullwidth">
                  <tbody>
                    <tr><td><strong>Varighet</strong></td><td>2 timer</td></tr>
                    <tr><td><strong>Pris</strong></td><td>Gratis!!</td></tr>
                  </tbody>
                </table>
                </div>
              </article>

            </div>
          </div>
          <div className="column is-two-third-tablet">
            <div className="therapist-main-action section is-hidden-mobile">
              <a className="button cta-button is-large" href="https://hjertekroll.simplero.com/page/157257"><i className="material-icons pr-3">shop</i> Meld deg på</a>
            </div>

            <div className="section">
              <h2 className="title">Om kurset</h2>
              <PageContent className="content" content={content} />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

CourseTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
}

const Course = ({ data }) => {
  const { markdownRemark: course } = data

  return (
    <Layout>
      <CourseTemplate
        content={course.html}
        contentComponent={HTMLContent}
        description={course.frontmatter.description}
        image={course.frontmatter.image}
        helmet={
          <Helmet titleTemplate="%s | Hjertekrøll">
            <title>{`${course.frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${course.frontmatter.description}`}
            />
          </Helmet>
        }
        name={course.frontmatter.name}
      />
    </Layout>
  )
}

export default Course

export const pageQuery = graphql`
  query CourseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        description
        image {
          childImageSharp {
            fluid(maxWidth: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
