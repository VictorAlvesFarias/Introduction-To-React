import React from 'react'
import './Header.css'
import notbookIlustration from '../../assets/notbook_ilustration.png'

const Header = () => {
  return (
      <header>
        <div className='header_container'>      
          <div className='header_texts'>
            <h1 className='title'>React<br/>Um Biblioteca Java Script</h1>
            <p >Seu objetivo é facilitar a conexão entre as linguagens dentro da sua área de desenvolvimento, criando um reaproveitamento e padronização de interface através de componentes, diminuindo o caminho e facilitando a comunicação dentro do código.</p>
            <p >Inscreva-se e faça parte da lista de pessoas que visitaram esse site.</p>
            <form className='form_email'>
              <input placeholder='Seu Endereço de E-mail' type="text" />                      
              <button>Vamos Nessa!</button>
            </form>
          </div>          
          <img className='notbook_ilustration' src={notbookIlustration} alt="" />
        </div>
      </header>
  )
}

export default Header