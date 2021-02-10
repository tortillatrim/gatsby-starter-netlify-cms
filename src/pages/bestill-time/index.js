import React from 'react'
import Layout from '../../components/Layout'
import BookingForm from '../../components/BookingForm'
import Map from '../../components/Map'

export default () => (
  <Layout>
    <section className="has-background-info-light ">
      <div className="section">
        <div className="container content">
          <h1 className="title">Bestill time</h1>
          <p>Ønsker du å bestille time? Ring oss, send e-post eller fyll ut kontaktskjema under.</p>
          <br />

          <div className="columns is-tablet py-5">
            <div className="column p-5">
              <BookingForm />
            </div>
            <div className="column p-5">
              <Map></Map>
              <div class="level">
                <div class="level-item has-text-centered my-6">
                  <div>
                    <p class="heading">post@hjertekroll.no</p>
                    <a href="mailto: post@hjertekroll.no" className="is-link button is-outlined">
                      <i className="material-icons pr-3">email</i>
                      Send epost
                    </a>
                  </div>
                </div>
                <div class="level-item has-text-centered my-6">
                  <div>
                    <p class="heading">95137906</p>
                    <a href="tel: 95137906" className="is-link button is-outlined">
                      <i className="material-icons pr-3">phone</i>
                      Ring oss 
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)
