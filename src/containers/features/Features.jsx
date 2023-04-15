import React from 'react'
import Feature from '../../components/feature/Feature';
import './Features.css'

const Features = () => {
  return (
    <section className='features'>
        <div className='features_background'>
            <div className='features_container'>
                <Feature title="O que é um Biblioteca ?">Biblioteca é um conjunto de funções que trazem diversas utilidades para o desenvolvimento de uma aplicação, ele é um conjunto de funcionalidades e ferramentas que dão suporte para  o comunicação e sintaxe no seu código.</Feature>
                <div>
                    <div className='features_title'>
                        <h2>Seja bem vindo ao React <br/> O Biblioteca mais usado pelos Desenvolvedores Front-End</h2>
                    </div>
                    <div className='features_content' >
                        <Feature title="Criadores">React é uma biblioteca Java Script mantida pela "Meta", o conglomerado responsável pelo Facebook, Whatsapp, Instagram, entre outros. </Feature>
                        <Feature title="O que é um componente React?">Elas se assemelham muito a funções Java Scritp comuns, mas, seus objetivos são aceitar informações como entrada e retornar novos elementos HTML. </Feature>
                        <Feature title="Veja O site">Esse site é um experimento, construído com o intuito de aprendizagem, então veja e me conte nos comentarios do GitHub, quais dicas e conhecimentos você poderia acrescentar.</Feature>
                    </div>
                </div>                
            </div>
        </div>
    </section>
  )
}


export default Features