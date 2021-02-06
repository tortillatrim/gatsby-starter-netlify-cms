import React from 'react'
import PropTypes from 'prop-types'
import { TerapeuterPageTemplate } from '../../templates/terapeuter-page'

const TerapeuterPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'terapeuter'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <TerapeuterPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  )
}

TerapeuterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TerapeuterPagePreview
