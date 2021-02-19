import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import CourseRoll from '../../components/CourseRoll'

export default class CourseIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Kurs | Hjertekrøll" />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Kurs</h1>
              <p>Vi hjelper voksne med å møte barn på en måte som fremmer god psykisk helse</p>
              <CourseRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
