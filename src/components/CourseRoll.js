import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CourseRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: course } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {course &&
          course.map(({ node: course }) => (
            <div key={course.id} className="column is-6">
              <article
                className={`roll-list-item tile is-child py-5`}
              >
                <header>
                  {course.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: course.frontmatter.image,
                          alt: `featured image thumbnail for course ${course.frontmatter.name}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={course.fields.slug}
                    >
                      {course.frontmatter.name}
                    </Link>
                  </p>
                </header>
                <p>
                  {course.frontmatter.description}
                  <br />
                  <br />
                  <Link className="button" to={course.fields.slug}>
                    Les mer →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

CourseRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CourseRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "course" } } }
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
    render={(data, count) => <CourseRoll data={data} count={count} />}
  />
)
