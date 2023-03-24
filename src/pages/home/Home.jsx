import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import Video from '../../assets/video.mp4'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner-container">
        <div id="banner"></div>
      </div>
        <div id="trailer-container">
          <div className="content">
            <video controls className="trailer">
              <source src={Video} /> Seu navegador não tem suporte para vídeos
            </video>
            <div id="sinopse">
              <p className="description">
                Após dois anos espreitando as ruas como Batman, Bruce Wayne se
                encontra nas profundezas mais sombrias de Gotham City. Com
                poucos aliados confiáveis, o vigilante solitário se estabelece
                como a personificação da vingança para a população.
              </p>
              <button className="button">Comprar Ingresso</button>
            </div>
          </div>
        </div>
        <Cards />
        <Footer />
     
    </>
  )
}

export default Home
