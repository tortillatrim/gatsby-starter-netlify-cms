import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class TherapistRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: therapists } = data.allMarkdownRemark

    return (
      <div className="columns">
        {therapists &&
          therapists.map(({ node: therapist }) => (
            <div key={therapist.id} className="column is-6">
              <article
                className={`blog-list-item tile is-child box notification`}
              >
                <header>
                  {therapist.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: therapist.frontmatter.image,
                          alt: `featured image thumbnail for therapist ${therapist.frontmatter.name}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={therapist.fields.slug}
                    >
                      {therapist.frontmatter.name}
                    </Link>
                  </p>
                </header>
                <p>
                  {therapist.frontmatter.description}
                  <br />
                  <br />
                  <Link className="button" to={therapist.fields.slug}>
                    Velg →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

TherapistRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TherapistRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "therapists" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                description
                templateKey
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TherapistRoll data={data} count={count} />}
  />
)
