import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../../Header/Header';
import Img1 from '../../assets/img/1.jpg'

const Fotos = () => {
  return (
    <>
    <Header/>
    <div className="box">
    <Link to='../../assets/img/1.jpg'>
    <img id="foto" src={Img1} alt="foto" />
    </Link>
    </div>
    <Footer/>
    </>
  )
}

export default Fotos;

