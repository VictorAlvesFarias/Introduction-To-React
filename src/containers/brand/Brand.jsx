import React from 'react'
import './Brand.css'
import logo_grey from '../../assets/react_logo_grey.jpg'

const Brand = () => {
  return (
    <section className='brand'>
        <div >React <img src={logo_grey} alt="" /></div>
        <div >Google</div>    
        <div >Meta</div>    
    </section>
  )
}

export default Brand