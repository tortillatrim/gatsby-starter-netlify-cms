import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PersonvernerklaeringPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
          <div className="content">
            <h1>
              {title}
            </h1>
            <PageContent className="content" content={content} />
          </div>
      </div>
    </section>
  )
}

PersonvernerklaeringPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PersonvernerklaeringPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PersonvernerklaeringPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PersonvernerklaeringPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PersonvernerklaeringPage

export const PersonvernerklaeringPageQuery = graphql`
  query personvernerklaeringPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
