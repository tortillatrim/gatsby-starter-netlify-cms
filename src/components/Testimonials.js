import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Testimonials = ({ testimonials }) => (
  <div className="columns">
    {testimonials.map((testimonial) => (
      <div className="column is-6">
      <article key={v4()} className="message">
        <div className="message-body">
          <p>
          {testimonial.quote}
          </p>
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
      </div>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
