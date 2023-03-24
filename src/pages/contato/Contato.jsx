import React from 'react'
import './contato.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Contato = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <fieldset>
          <legend>Contato</legend>
          <form>
            <label htmlFor="nome" className="lab-inp">
              Nome Completo:
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Digite aqui seu nome"
              autoComplete="off"
            />
            <label htmlFor="email" className="lab-inp">
              E-mail:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu melhor e-mail"
            />
            <label htmlFor="mensage" className="lab-inp">
              Mensagem:
            </label>
            <textarea name="mensage" id="mensage" cols="30" rows="5"></textarea>
            <button className="button">Enviar</button>
          </form>
        </fieldset>
      </div>
      <Footer/>
    </>
  )
}

export default Contato
