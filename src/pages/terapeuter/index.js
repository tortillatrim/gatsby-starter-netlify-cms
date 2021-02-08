import React from 'react'

import Layout from '../../components/Layout'
import TherapistRoll from '../../components/TherapistRoll'

export default class TerapistIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Terapeuter</h1>
              <p>
                Velg terapeut for å avtale time
              </p>
              <TherapistRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
