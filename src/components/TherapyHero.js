import React from 'react'
import PropTypes from 'prop-types'
import TherapyStep1Icon from '../components/TherapyStep1Icon'
import TherapyStep2Icon from '../components/TherapyStep2Icon'
import TherapyStep3Icon from '../components/TherapyStep3Icon'
import TherapyStep4Icon from '../components/TherapyStep4Icon'

const TherapyHero = class extends React.Component {

  render() {
    return (
      <section className="section container content">
        <h3 className="has-text-primary mb-0 is-size-5 has-text-weight-bold">Hva er EQ-terapi?</h3>
        <h2 className="title mb-6">{this.props.stepHeader}</h2>

        <div className="columns is-multiline">
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep1Icon></TherapyStep1Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">{this.props.step1Title}</h4>
            <p>{this.props.step1Text}</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep2Icon></TherapyStep2Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">{this.props.step2Title}</h4>
            <p>{this.props.step2Text}</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep3Icon></TherapyStep3Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">{this.props.step3Title}</h4>
            <p>{this.props.step3Text}</p>
          </div>
          <div className="column is-12-mobile is-6-tablet is-3-desktop">
            <TherapyStep4Icon></TherapyStep4Icon>
            <h4 className="is-size-5 mt-1 has-text-weight-semibold">{this.props.step4Title}</h4>
            <p>{this.props.step4Text}</p>
          </div>
        </div>
      </section>
    )
  }
}

TherapyHero.propTypes = {
  stepHeader: PropTypes.string,
  step1Title: PropTypes.string,
  step1Text: PropTypes.string,
  step2Title: PropTypes.string,
  step2Text: PropTypes.string,
  step3Title: PropTypes.string,
  step3Text: PropTypes.string,
  step4Title: PropTypes.string,
  step4Text: PropTypes.string,
}

export default TherapyHero
