import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const TerapeutTemplate = ({
  content,
  contentComponent,
  description,
  name,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <PreviewCompatibleImage
                        imageInfo={{
                          image: image,
                          alt: `featured image thumbnail for therapist ${name}`,
                        }}
                      />
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

TerapeutTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  name: PropTypes.string,
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
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
