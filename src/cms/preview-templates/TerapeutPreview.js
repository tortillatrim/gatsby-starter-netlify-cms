import React from 'react'
import PropTypes from 'prop-types'
import { TerapeutTemplate } from '../../templates/therapists'

const TerapeutPreview = ({ entry, widgetFor }) => {
  return (
    <TerapeutTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      name={entry.getIn(['data', 'name'])}
    />
  )
}

TerapeutPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TerapeutPreview
