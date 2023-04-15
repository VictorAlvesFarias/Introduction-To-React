import React from 'react'
import './Feature.css'

const Feature = (props) => {
  return (
    <div className='feature'>
      <div className='feature_gd_bar'></div>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default Feature