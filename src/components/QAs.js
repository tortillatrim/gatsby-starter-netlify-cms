import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const QAs = class extends React.Component {

  render() {
    var open = window.innerWidth < 768 ? false : true
    return (
      <div>
        {this.props.qas.map((qas) => (
          <details key={v4()} className={`qa-detail`} open={open}>
            <summary type="title">{qas.question}</summary>
            <p type="default">
              {qas.answer}
            </p>
            </details>
        ))}
      </div>
    )
  }
}

QAs.propTypes = {
  qas: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
}

export default QAs
