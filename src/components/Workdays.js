import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Workdays = ({ workdays: workdays }) => (
  <div>
    <table className="table is-fullwidth">
      <tbody>
      {workdays.map((workday) => (
         <tr key={v4()}>
         <th>{workday.days}</th>
         <th>{workday.hours}</th>
       </tr>
      ))}
      </tbody>
    </table>
   
  </div>
)

Workdays.propTypes = {
  workdays: PropTypes.arrayOf(
    PropTypes.shape({
      days: PropTypes.string,
      hours: PropTypes.string,
    })
  ),
}

export default Workdays
