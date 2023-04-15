import React from 'react'
import './Navbar.css'
import logo from '../../assets/react_logo.png'

const Navbar = () => {

  return (
    <nav id='react_proj_navbar' className='react_proj_navbar_style'>
          <img alt='' src={logo}></img>
          <p>React</p>
    </nav>
  )
}

window.addEventListener("scroll", function() {
  let navBarAnimation = document.getElementById('react_proj_navbar')
  navBarAnimation.classList.toggle('react_proj_navbar_style_scrolling', window.scrollY > 150)
}
)

export default Navbar