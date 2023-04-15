import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer_texts'>
          <h2> Obrigado por ter visto até aqui, espero que tenha possa ter tido  uma ótima experiência</h2>
        </div>
        <div className='footer_lists'>
          <div className='footer_collum'>
            <strong><p>Projetado e feito em:</p></strong>
            <p>React-Java Script</p>
          </div>
          <div className='footer_collum'>
            <ul>
              <li><strong>By:</strong></li>
              <li>Victor Alves</li>
            </ul>
          </div>
          <div className='footer_collum'>
            <ul>
              <li><strong>Mídias</strong></li>
              <li><a href="https://www.linkedin.com/in/victor-alves-farias-023570243/">Linkedin</a></li>
              <li><a href="https://github.com/VictorAlvesFarias">Github</a></li>
            </ul>
          </div>
          <div className='footer_collum'>
            <ul>
              <li><strong>Referências</strong></li>
              <li><a href="https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3">Figma</a></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer