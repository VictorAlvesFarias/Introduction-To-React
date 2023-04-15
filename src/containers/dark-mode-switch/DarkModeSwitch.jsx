import React from 'react'
import {useState} from 'react'
import './DarkModeSwitch.css'


const DarkModeSwitch = () => {

  const [switchMode, setSwitchMode] =  useState(false)

  function darkModeOff() {
      document.body.style.setProperty('--gradient_background','white')
      document.body.style.setProperty('--gradient_background_2','#282c34')
      document.body.style.setProperty('--color_text','black')
      document.body.style.setProperty('--color_text_2','white')
      document.body.style.setProperty('--footer','#20232a')
      document.body.style.setProperty('--baby_blue','#61dafb')
      document.body.style.setProperty('--color_bg','White')
  }

  function darkModeOn() {
    document.body.style.setProperty('--gradient_background','radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, var(--color_bg) 25%)')
    document.body.style.setProperty('--gradient_background_2','linear-gradient(89.97deg, #042c543c 1.84%, rgba(0, 40, 83, 0.704)')
    document.body.style.setProperty('--color_text','white')
    document.body.style.setProperty('--color_text_2','white')
    document.body.style.setProperty('--footer','#031B34')
    document.body.style.setProperty('--baby_blue','#61dafb')
    document.body.style.setProperty('--color_bg','#040C18')
}

  function handleDarkModeSwitch() {
    switchMode?setSwitchMode(false):setSwitchMode(true)
    switchMode?darkModeOff():darkModeOn()
  }
  
  return (
    <section className='dark_mode_switch'>
        <div className='dark_mode_switch_gd_background'>
          <div className='dark_mode_switch_conatainer'>
            <div className='dark_mode_switch_title'>
              <p>Troca de cores</p>
              <h2>Clique no botão a frente para usar o Dark Mode</h2>            
            </div>
            <button onClick={handleDarkModeSwitch} className='dark_mode_switch_button'>
              <div className='dark_mode_switch_circle' style={switchMode?{left:'70%'}:{left:'5%'}}></div>
           </button>
          </div>
        </div>
    </section>
  )
}

export default DarkModeSwitch