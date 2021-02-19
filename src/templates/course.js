import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
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
