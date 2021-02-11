import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import TherapistRoll from '../../components/TherapistRoll'

export default class TerapistIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="EQ Terapeuter | Hjertekrøll" />
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Terapeuter</h1>
              <TherapistRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
