import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Fotos from './pages/fotos/Fotos';
import Descricao from './pages/comentarios/Comentarios';
import Comentarios from './pages/comentarios/Comentarios';


function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/fotos' element={<Fotos />} />
          <Route path='/comentarios' element={<Comentarios/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
