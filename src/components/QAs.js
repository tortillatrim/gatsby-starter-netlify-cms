import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const QAs = ({ qas }) => (
  <div>
    {qas.map((qas) => (
      <article key={v4()} className="">
        <h4>{qas.question}</h4>
        <p>
        {qas.answer}
        </p>
      </article>
    ))}
  </div>
)

QAs.propTypes = {
  qas: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
}

export default QAs
