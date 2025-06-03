import './StatusBox.css'

import React from 'react'

const StatusBox = (props:{status:string}) => {
  return (
    <div className={props.status}>{props.status}</div>
  )
}

export default StatusBox