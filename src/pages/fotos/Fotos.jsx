import React from 'react'
import './fotos.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Img1 from '../../assets/img/1.jpg'
import Img2 from '../../assets/img/2.jpg'
import Img3 from '../../assets/img/3.jpg'
import Img4 from '../../assets/img/4.jpg'
import Img5 from '../../assets/img/5.jpg'
import Img6 from '../../assets/img/6.jpg'
import Img7 from '../../assets/img/7.jpg'
import Img8 from '../../assets/img/8.jpg'
import Img9 from '../../assets/img/9.jpg'
import Img10 from '../../assets/img/10.jpg'
import Img11 from '../../assets/img/11.jpg'
import Img12 from '../../assets/img/12.jpg'
import Img13 from '../../assets/img/13.jpg'
import Img14 from '../../assets/img/14.jpg'
import Img15 from '../../assets/img/15.jpg'
import Img16 from '../../assets/img/16.jpg'

const Fotos = () => {
  return (
    <>
      <Header />
      <div className="box">
        <fieldset className="fieldset">
          <legend className="legend">Galeria de Fotos</legend>
          <div className="gallery-container">
            <img src={Img1} alt="Robert" className="gallery-items" />
            <img src={Img2} alt="Robert" className="gallery-items" />
            <img src={Img3} alt="Robert" className="gallery-items" />
            <img src={Img4} alt="Robert" className="gallery-items" />
            <img src={Img5} alt="Robert" className="gallery-items" />
            <img src={Img6} alt="Robert" className="gallery-items" />
            <img src={Img7} alt="Robert" className="gallery-items" />
            <img src={Img8} alt="Robert" className="gallery-items" />
            <img src={Img9} alt="Robert" className="gallery-items" />
            <img src={Img10} alt="Robert" className="gallery-items" />
            <img src={Img11} alt="Robert" className="gallery-items" />
            <img src={Img12} alt="Robert" className="gallery-items" />
            <img src={Img13} alt="Robert" className="gallery-items" />
            <img src={Img14} alt="Robert" className="gallery-items" />
            <img src={Img15} alt="Robert" className="gallery-items" />
            <img src={Img16} alt="Robert" className="gallery-items" />
          </div>
        </fieldset>
      </div>
      <Footer />
    </>
  )
}

export default Fotos
